var quran = {
    name:'hakim',
    number:5,
    course:lesson,
};
quran.hifz = true;
quran.qiraat = false;
delete quran.course;


var elName = document.getElementById('quranName');
elName.textContent = quran.name;

var elQiraat = document.getElementById('qiraat');
elQiraat.className = quran.qiraat;

