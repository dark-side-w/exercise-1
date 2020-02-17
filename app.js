(() => {
    console.log('Tak, to w co jest opkowane to wszytko to IIFE - Immediately invoked function expression');

    // Dane z backednu
    const user = {
        name: 'Księciunio',
        email: 'k@example.com',
        permissions: [
            'edit',
            'copy',
            'delete'
        ],
        isAdmin: true
    }
    // TODO: Zadania dla Ciebie:
    // 1. Dla każdej właściwości obiektu user stwórz zmieną która będzie przechowywwać jej wartość
    // 2. Stwórz warunke który wyświetli w konsoli adres email jeżeli użytkownik posiada uprawnienie do kopiowania.
    // Zadanie dodatkowe:
    // 3. Zmień nazwę buttona 'Sign up' na nazwę użytkownika.


})();
