export function renderPins(pins) {
	const container = document.querySelector('.pins__container');

	// clear container and render new pins
	container.innerHTML = pins
		.map(
			pin => `
        <article class="pins__item pin">
            <img src="${pin.image}" alt="${pin.title}" class="pin__image" />
            <h3 class="pin__title">${pin.title}</h3>
        </article>
    `,
		)
		.join('');
}
