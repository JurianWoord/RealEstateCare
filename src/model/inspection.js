class Inspection {
  constructor({ inspectionId, date, location, inspector, damage, maintenance, technicalInstallations, modifications }) {
    this.inspectionId = inspectionId;
    this.date = new Date(date);
    this.location = location;
    this.inspector = inspector;
    this.damage = damage;
    this.maintenance = maintenance ;
    this.technicalInstallations = technicalInstallations;
    this.modifications = modifications;
  }

}

export default Inspection;
