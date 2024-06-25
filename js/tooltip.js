const studentCards = document.querySelectorAll('.personage-card');

studentCards.forEach((card) => {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = `
      <div id="tooltip-name">Name: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-alternate-names">Alternate names: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-species">Species: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-gender">Gender: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-house">House: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-birthday">Date of birth: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-year">Year of birth: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-wizard">Wizard: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-ancestry">Ancestry: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-eye-color">Eye color: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-hair-color">Hair color: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-wand">Wand: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-patronus">Patronus: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-student">Hogwarts student: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-staff">Hogwarts staff: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-actor">Actor: <span class="tooltip-accent-color"></span></div>
      <div id="tooltip-alive">Alive: <span class="tooltip-accent-color"></span></div>
    `;
  card.appendChild(tooltip);

  card.addEventListener('mouseenter', () => {
    tooltip.querySelector('#tooltip-name .tooltip-accent-color').textContent =
      card.getAttribute('data-name');
    tooltip.querySelector('#tooltip-alternate-names .tooltip-accent-color').textContent =
      card.getAttribute('data-alternate-names');
    tooltip.querySelector('#tooltip-species .tooltip-accent-color').textContent =
      card.getAttribute('data-species');
    tooltip.querySelector('#tooltip-gender .tooltip-accent-color').textContent =
      card.getAttribute('data-gender');
    tooltip.querySelector('#tooltip-house .tooltip-accent-color').textContent =
      card.getAttribute('data-house');
    tooltip.querySelector('#tooltip-birthday .tooltip-accent-color').textContent =
      card.getAttribute('data-birthday');
    tooltip.querySelector('#tooltip-year .tooltip-accent-color').textContent =
      card.getAttribute('data-year');
    tooltip.querySelector('#tooltip-wizard .tooltip-accent-color').textContent =
      card.getAttribute('data-wizard');
    tooltip.querySelector('#tooltip-ancestry .tooltip-accent-color').textContent =
      card.getAttribute('data-ancestry');
    tooltip.querySelector('#tooltip-eye-color .tooltip-accent-color').textContent =
      card.getAttribute('data-eye-color');
    tooltip.querySelector('#tooltip-hair-color .tooltip-accent-color').textContent =
      card.getAttribute('data-hair-color');
    tooltip.querySelector('#tooltip-wand .tooltip-accent-color').textContent =
      card.getAttribute('data-wand');
    tooltip.querySelector('#tooltip-patronus .tooltip-accent-color').textContent =
      card.getAttribute('data-patronus');
    tooltip.querySelector('#tooltip-student .tooltip-accent-color').textContent =
      card.getAttribute('data-student');
    tooltip.querySelector('#tooltip-staff .tooltip-accent-color').textContent =
      card.getAttribute('data-staff');
    tooltip.querySelector('#tooltip-actor .tooltip-accent-color').textContent =
      card.getAttribute('data-actor');
    tooltip.querySelector('#tooltip-alive .tooltip-accent-color').textContent =
      card.getAttribute('data-alive');

    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
  });

  card.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  });
});
