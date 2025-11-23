describe("POST /api/v1/locker", () => {
  describe("New locker", () => {
    test("With invalid types", async () => {
      const res = await fetch("http://localhost:8080/api/v1/locker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo: 123,
          ecp: "teste",
          ativo: "falso",
        }),
      });

      expect(res.status).toBe(500);

      const resBody = await res.json();

      expect(resBody.message).toContain(
        `Locker validation failed: ativo: Cast to Boolean failed for value`
      );
    });

    test("With valid types", async () => {
      const res = await fetch("http://localhost:8080/api/v1/locker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo: "Teste1",
          ecp: "teste2",
          ativo: false,
        }),
      });

      expect(res.status).toBe(201);

      const resBody = await res.json();

      expect(resBody).toEqual({
        __v: resBody.__v,
        _id: resBody._id,
        codigo: "Teste1",
        ecp: "teste2",
        ativo: false,
      });

      const id = resBody._id;

      const deleteRes = await fetch(
        `http://localhost:8080/api/v1/locker/${id}`,
        {
          method: "DELETE",
        }
      );

      expect(deleteRes.status).toBe(200);

      const deleteResBody = await deleteRes.json();

      expect(deleteResBody.message).toContain(
        `locker ${resBody.codigo} deleted successfully`
      );
    });
  });
});
