import Record from "./Record";

const records = [
  {
    id: 2,
    name: "Pablo",
    lastName: "Alfredo",
    phone: "987654321",
    email: "q@gmail.com",
    age: 24,
    address: "Calle falsa 321",
    delivered: true,
    observation: "",
  },
  {
    id: 1,
    name: "Juan",
    lastName: "Perez",
    phone: "123456789",
    email: "r@gmail.com",
    age: 20,
    address: "Calle falsa 123",
    delivered: false,
    observation: "No hay observaciones",
  },
];

describe("Record", () => {
  test("should create a Record instance from the provided values in constructor", () => {
    const record = new Record(
      1,
      "Juan",
      "Perez",
      "12345678",
      "r@gmail.com",
      20,
      "Calle falsa 123",
      false,
      "No hay observaciones"
    );
    expect(record.id).toBe(1);
    expect(record.name).toBe("Juan");
    expect(record.lastName).toBe("Perez");
    expect(record.phone).toBe("12345678");
    expect(record.email).toBe("r@gmail.com");
    expect(record.age).toBe(20);
    expect(record.address).toBe("Calle falsa 123");
    expect(record.delivered).toBe(false);
    expect(record.observation).toBe("No hay observaciones");
  });

  test("should create a Record instance from the provided json with the 'fromJson' method", () => {
    const record = Record.fromJson(records[0]);
    expect(record.id).toBe(records[0].id);
    expect(record.name).toBe(records[0].name);
    expect(record.lastName).toBe(records[0].lastName);
    expect(record.phone).toBe(records[0].phone);
    expect(record.email).toBe(records[0].email);
    expect(record.age).toBe(records[0].age);
    expect(record.address).toBe(records[0].address);
    expect(record.delivered).toBe(records[0].delivered);
    expect(record.observation).toBe(records[0].observation);
  });

  test("should create a Record instance from the json in position 0 provided with the 'fromJsonArray' method", () => {
    const record = Record.fromJsonArray(records);
    expect(record[0].id).toBe(records[0].id);
    expect(record[0].name).toBe(records[0].name);
    expect(record[0].lastName).toBe(records[0].lastName);
    expect(record[0].phone).toBe(records[0].phone);
    expect(record[0].email).toBe(records[0].email);
    expect(record[0].age).toBe(records[0].age);
    expect(record[0].address).toBe(records[0].address);
    expect(record[0].delivered).toBe(records[0].delivered);
    expect(record[0].observation).toBe(records[0].observation);
  });

  test("should create a Record instance from the json in position 1 provided with the 'fromJsonArray' method", () => {
    const record = Record.fromJsonArray(records);
    expect(record[1].id).toBe(records[1].id);
    expect(record[1].name).toBe(records[1].name);
    expect(record[1].lastName).toBe(records[1].lastName);
    expect(record[1].phone).toBe(records[1].phone);
    expect(record[1].email).toBe(records[1].email);
    expect(record[1].age).toBe(records[1].age);
    expect(record[1].address).toBe(records[1].address);
    expect(record[1].delivered).toBe(records[1].delivered);
    expect(record[1].observation).toBe(records[1].observation);
  });

  test("should create an istance of Record an toggle the delivered value", () => {
    const record = Record.fromJson(records[0]);
    record.toggleDelivered();
    expect(record.delivered).toBe(!records[0].delivered);
  });
});
