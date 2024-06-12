const translation2 = {
    source: {
        stepIntroGenderText: "Select your gender",
        stepIntroGender1: "Female",
        stepIntroGender2: "Male",
        ageOverQ: "Are you over 18 years old?",
        stepIntroGenderTitle: "Who are you?",
    },
    en: {
        stepIntroGenderText: "Select your gender",
        stepIntroGender1: "I am a woman.",
        stepIntroGender2: "I am a man",
        ageOverQ: "Are you over 18 years old?",
        stepIntroGenderTitle: "Who are you?",
    },
    de: {
        stepIntroGenderText: "Wähle dein Geschlecht",
        stepIntroGender1: "Ich bin eine Frau",
        stepIntroGender2: "Ich bin ein Mann",
        ageOverQ: "Sind Sie über 18 Jahre alt?",
        stepIntroGenderTitle: "Wer bist du?",
        textCaptcha: "Klicken Sie hier, um freizuschalten",
        textCaptcha2: "Entsperren Sie das Mädchen, um sich weiter zu bewegen",
    },
    ja: {
        stepIntroGenderText: "性別を選んでください",
        stepIntroGender1: "私は女です",
        stepIntroGender2: "私は男です",
        ageOverQ: "あなたは18歳以上ですか？",
        stepIntroGenderTitle: "あなたは誰？",
        textCaptcha: "クリックしてロックを解除します",
        textCaptcha2: "さらに移動するために女の子のロックを解除してください",
    },
    sv: {
        stepIntroGenderText: "Välj ditt kön",
        stepIntroGender1: "Jag är en kvinna",
        stepIntroGender2: "Jag är en man",
        ageOverQ: "Är du över 18 år?",
        stepIntroGenderTitle: "Vem är du?",
        textCaptcha: "Klicka för att låsa upp",
        textCaptcha2: "Lås upp tjejen för att flytta vidare",
    },
    da: {
        stepIntroGenderText: "Vælg dit køn",
        stepIntroGender1: "Jeg er en kvinde",
        stepIntroGender2: "Jeg er en mand",
        ageOverQ: "Er du over 18 år?",
        stepIntroGenderTitle: "Hvem er du?",
        textCaptcha: "Klik for at låse op",
        textCaptcha2: "Lås pigen op for at flytte videre",
    },
    ar: {
        stepIntroGenderText: "اختر جنسك",
        stepIntroGender1: "أنا إمراة",
        stepIntroGender2: "انا رجل",
        ageOverQ: "هل عمرك اكثر من 18 عام؟",
        stepIntroGenderTitle: "من أنت؟",
        textCaptcha: "انقر لإلغاء تأمين",
        textCaptcha2: "فتح الفتاة لتحريك أكثر",
    },
    pt: {
        stepIntroGenderText: "Selecione o seu sexo",
        stepIntroGender1: "Eu sou uma mulher",
        stepIntroGender2: "Eu sou um homem",
        ageOverQ: "Tem 18 anos ou mais?",
        stepIntroGenderTitle: "Quem é Você?",
        textCaptcha: "Clique para desbloquear.",
        textCaptcha2: "Desbloquear a garota para se mover mais",
    },
    it: {
        stepIntroGenderText: "Seleziona il tuo sesso",
        stepIntroGender1: "Sono una donna",
        stepIntroGender2: "Sono un uomo",
        ageOverQ: "Hai più di 18 anni?",
        stepIntroGenderTitle: "Chi sei?",
        textCaptcha: "Clicca per sbloccare",
        textCaptcha2: "Sblocca la ragazza per muoverti ulteriormente",
    },
    zh: {
        stepIntroGenderText: "選擇您的性別",
        stepIntroGender1: "我是一个女人",
        stepIntroGender2: "我是一个男人",
        ageOverQ: "您是否年满 18 周岁？",
        stepIntroGenderTitle: "你是谁？",
        textCaptcha: "点击解锁",
        textCaptcha2: "解锁女孩进一步移动",
    },
    es: {
        stepIntroGenderText: "Elektu vian sekson",
        stepIntroGender1: "Soy una mujer",
        stepIntroGender2: "Soy un hombre",
        ageOverQ: "¿Tienes más de 18 años?",
        stepIntroGenderTitle: "¿Quién eres tú?",
        textCaptcha: "Haga clic para desbloquear",
        textCaptcha2: "Desbloquea a la chica para moverse más",
    },
    fr: {
        stepIntroGenderText: "Sélectionnez votre sexe",
        stepIntroGender1: "Je suis une femme",
        stepIntroGender2: "Je suis un homme",
        ageOverQ: "As-tu plus de 18 ans\xa0?",
        stepIntroGenderTitle: "Qui es-tu?",
        textCaptcha: "Cliquez pour déverrouiller",
        textCaptcha2: "Déverrouiller la fille pour aller plus loin",
    },
    nl: {
        stepIntroGenderText: "Kies je geslacht",
        stepIntroGender1: "Ik ben een vrouw.",
        stepIntroGender2: "Ik ben een vrouw.",
        ageOverQ: "Ben je ouder dan 18 jaar?",
        stepIntroGenderTitle: "Wie ben jij?",
        textCaptcha: "Klik om te ontgrendelen",
        textCaptcha2: "Ontgrendel het meisje om verder te gaan",
    },
    ru: {
        stepIntroGenderText: "Выбери свой пол",
        stepIntroGender1: "Я женщина",
        stepIntroGender2: "Я мужчина",
        ageOverQ: "Вам есть 18 лет?",
        stepIntroGenderTitle: "Кто вы?",
        textCaptcha: "Нажмите, чтобы разблокировать",
        textCaptcha2: "Разблокируйте девушку, чтобы двигаться дальше",
    },
    uk: {
        stepIntroGenderText: "Виберіть стать",
        stepIntroGender1: "Я жінка",
        stepIntroGender2: "Я чоловік",
        ageOverQ: "Вам є 18 років?",
        stepIntroGenderTitle: "Хто ви?",
        textCaptcha: "Натисніть, щоб розблокувати",
        textCaptcha2: "Розблокуйте дівчину, щоб рухатися далі",
    },
};
function detect_language() {
    var userLang =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;
    if (userLang == "zh-CN" || userLang == "zh-SG" || userLang == "zh-MY" || userLang == "zh-CHS") {
        userLang = "zh";
    } else if (
        userLang == "zh-HK" ||
        userLang == "zh-MO" ||
        userLang == "zh-TW" ||
        userLang == "zh-CHT"
    ) {
        userLang = "zh";
    } else if (userLang.length > 2) {
        userLang = userLang[0] + userLang[1];
    }
    return userLang;
}
document.addEventListener("DOMContentLoaded", function (event) {
    let browserLang = detect_language();
    const langTranslation =
        translation2[browserLang] && Object.keys(translation2[browserLang]).length > 0
            ? translation2[browserLang]
            : translation2["source"];
    for (const textKey of Object.keys(langTranslation)) {
        const textString = langTranslation[textKey];
        if (textKey === "title") {
            $(textKey).text(textString);
        } else {
            $(`.${textKey}
             `).text(textString);
        }
    }
});
