export function initDropdown(selectBtn, dropdown, arrow) {
	function closeDropdown() {
		dropdown.classList.remove('dropdown_active');
		if (arrow) arrow.classList.remove('header__arrow_rotated');
	}

	function openDropdown() {
		dropdown.classList.add('dropdown_active');
		if (arrow) arrow.classList.add('header__arrow_rotated');
	}

	selectBtn.addEventListener('click', event => {
		event.stopPropagation();

		const isOpen = dropdown.classList.contains('dropdown_active');
		isOpen ? closeDropdown() : openDropdown();
	});

	document.addEventListener('click', () => closeDropdown());

	return { closeDropdown };
}
