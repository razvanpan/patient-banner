export default class PatientBanner {
  constructor(
    public ID: String,
    public name: String,
    public gender: String,
    public age: number,
    public birthDate: String,
    public lengthStay: String,
    public ed: String,
    public allergies: String,
    public eID: String,
    public triage: String,
    public risks: String
  ) {
    this.ID = ID
    this.name = name
    this.gender = gender
    this.age = age
    this.birthDate = birthDate
    this.lengthStay = lengthStay
    this.ed = ed
    this.allergies = allergies
    this.eID = eID
    this.triage = triage
    this.risks = risks
  }
}
