// Password here
const authens = [
    {
        id: '1',
        pw: 'motconvitxoerahai con thằn lan con',
    }
];

const checkAuthen = function (id, pw) {
    let isMatched = false;
    for (authen of authens) {
        if (id === authen.id && pw === authen.pw) {
            isMatched = true;
        }
    }

    return isMatched;
}