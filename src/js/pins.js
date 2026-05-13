import { openModal } from './modal.js';

export function renderPins(pins) {
	const container = document.querySelector('.pins__container');

	// clear container and render new pins
	container.innerHTML = pins
		.map(
			pin => `
        <article class="pins__item pin">
					<div class="pin__image-wrapper">
						<img src="${pin.image}" alt="${pin.title}" class="pin__image" />
						<div class="pin__overlay">
							<button class="btn_add-board" data-title="${pin.title}" data-image="${pin.image}">Add to Board</button>
							<button class="btn_hide-pin">Hide Pin</button>
							<button class="btn_report">Report</button>
						</div>
					</div>
					<h3 class="pin__title">${pin.title}</h3>
        </article>
    `,
		)
		.join('');

	// add to board event delegation
	container.addEventListener('click', event => {
		const addButton = event.target.closest('.btn_add-board');
		if (addButton) {
			const title = addButton.dataset.title;
			const image = addButton.dataset.image;
			if (title && image) {
				openModal({ title, image });
			}
		}
	});
}
