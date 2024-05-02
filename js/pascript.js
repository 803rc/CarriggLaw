// pascript.js
document.addEventListener('DOMContentLoaded', function() {
const practiceAreaContent = {
    'personal-injury': `
      <h2 class="decorated-heading">PERSONAL INJURY</h2>
      <p class="biotext">Personal injury content goes here...</p>
    `,
    'criminal-defense': `
      <h2 class="decorated-heading">CRIMINAL DEFENSE</h2>
      <p class="biotext">Criminal defense content goes here...</p>
    `,
    'workers-comp': `
      <h2 class="decorated-heading">WORKERS COMP</h2>
      <p class="biotext">Workers comp content goes here...</p>
    `,
    'family-law': `
      <h2 class="decorated-heading">FAMILY LAW</h2>
      <p class="biotext">Family law content goes here...</p>
    `,
    'dui-defense': `
      <h2 class="decorated-heading">DUI DEFENSE</h2>
      <p class="biotext">DUI defense content goes here...</p>
    `,
    'k2spice-cases': `
      <h2 class="decorated-heading">K2/SPICE CASES</h2>
      <p class="biotext">K2/Spice cases content goes here...</p>
    `,
    // Add more practice areas and their content
  };
  
  const practiceAreaCards = document.querySelectorAll('.cardcol');
  practiceAreaCards.forEach(card => {
    card.addEventListener('click', () => {
      const practiceAreaId = card.id;
      const content = practiceAreaContent[practiceAreaId];
      document.querySelector('.attbio .biodiv').innerHTML = content;
    });
  });
});