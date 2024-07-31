class Inspection {
  constructor({ inspectionId, propertyId, date, type, details }) {
    this.inspectionId = inspectionId;
    this.propertyId = propertyId;
    this.date = new Date(date);
    this.type = type;
    this.details = details;
  }
}

export default Inspection;
