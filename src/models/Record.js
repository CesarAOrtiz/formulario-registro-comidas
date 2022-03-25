export default class Record {
  constructor(
    id,
    name,
    lastName,
    phone,
    email,
    age,
    address,
    delivered = false,
    observation
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.age = age;
    this.address = address;
    this.delivered = delivered;
    this.observation = observation;
  }

  static fromJson(json) {
    return new Record(
      json.id,
      json.name,
      json.lastName,
      json.phone,
      json.email,
      json.age,
      json.address,
      json.delivered,
      json.observation
    );
  }

  static fromJsonArray(jsonArray) {
    return jsonArray.map((json) => Record.fromJson(json));
  }

  toggleDelivered() {
    this.delivered = !this.delivered;
  }
}
