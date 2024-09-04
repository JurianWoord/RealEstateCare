import Inspection from '@/model/inspection';

const API_URL = 'https://my-json-server.typicode.com/JurianWoord/RealEstateCare/executed_inspections';

export async function getInspections() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Log de opgehaalde data

    // Converteer de data naar het datamodel
    return data.map(item => new Inspection(item)) || [];
  } catch (error) {
    console.error('Error fetching data:', error); // Log eventuele fouten
    return [];
  }
}
