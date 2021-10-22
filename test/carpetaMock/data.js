const fileMD = [
  'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\emptyMock.md',
  'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
];
const mdlinks = [
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
  },
];
const mdlinksValidate = [
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
];
const mdlinksVa = [
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
  {
    href: 'https://gi.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt SIGUE Y sigue hasta llegar a',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 404,
    txStatus: 'FAIL',
  },
];
const linkThen = [{
  href: 'https://github.com/workshopper/learnyounode',
  text: 'learnyounode',
  file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
}];
const linkValidate = [
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
    status: 200,
    txStatus: 'OK',
  },
];
const linkFail = [{
  href: 'https://gitb.com/workshopper/how-to-npm',
  text: 'how-to-npm',
  file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
}];
const linkValida = [{
  href: 'https://gitb.com/workshopper/how-to-npm',
  text: 'how-to-npm',
  file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md',
  status: 404,
  txStatus: 'FAIL',
}];

module.exports = {
  fileMD,
  mdlinks,
  mdlinksValidate,
  mdlinksVa,
  linkThen,
  linkValidate,
  linkFail,
  linkValida,
};
