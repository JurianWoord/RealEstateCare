class Inspection {
  constructor({ inspectionId, propertyId, date, damage, maintenance, installation, modification }) {
    this.inspectionId = inspectionId;
    this.propertyId = propertyId;
    this.date = date instanceof Date ? date : new Date(date);
    this.damage = damage;
    this.maintenance = maintenance;
    this.installation = installation;
    this.modification = modification;
  }
}

export default Inspection;
