describe('Navigate', () => {
	it('Navigate to our first page', () => {
		cy.visit('https://platzi.com');
	});
	it('Reload page', () => {
		cy.reload();
	});
	it('Force reload page', () => {
		cy.visit('https://google.com');
		cy.reload(true);
	})
	// Se usa only despues del it para que corra solo ese test
	it('Foward back the page', () => {
		cy.visit('https://google.com');
		cy.visit('https://www.google.com/search?client=firefox-b-d&q=traslate')
		cy.go('back') // Para ir una pagina atras, tambien se puede con (-1)
		cy.go('forward') // Para ir una pagina adelante, tambien se puede con (1)
	})
})