import StorageManager from "./StorageManager";

describe("StorageManager", () => {
  beforeEach(() => {
    const localStorage = {};

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn((key) => localStorage[key] || null),
        setItem: jest.fn((key, value) => (localStorage[key] = String(value))),
      },
      writable: true,
    });
  });

  it("should save", () => {
    StorageManager.save("save", "test1");
    expect(JSON.parse(localStorage.getItem("save"))).toBe("test1");
  });

  it("should load", () => {
    localStorage.setItem("load", JSON.stringify("test2"));
    expect(StorageManager.load("load")).toBe("test2");
  });

  it("should save and load", () => {
    StorageManager.save("saveAndLoad", "test3");
    expect(StorageManager.load("saveAndLoad")).toBe("test3");
  });
});
