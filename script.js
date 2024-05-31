function changeLanguage(language) {
    const elements = {
        es: {
            businessName: "Architectural Finesse",
            wallTextureButton: "Textura en Paredes",
            stretchCeilingButton: "Stretch Ceiling",
            languageButtons: {
                es: "Español",
                en: "English"
            }
        },
        en: {
            businessName: "Architectural Finesse",
            wallTextureButton: "Wall Texture",
            stretchCeilingButton: "Stretch Ceiling",
            languageButtons: {
                es: "Spanish",
                en: "English"
            }
        }
    };

    document.getElementById("business-name").innerText = elements[language].businessName;
    document.getElementById("wall-texture-button").innerText = elements[language].wallTextureButton;
    document.getElementById("stretch-ceiling-button").innerText = elements[language].stretchCeilingButton;

    // Update language button text
    document.querySelectorAll(".language-button").forEach(button => {
        button.innerText = elements[language].languageButtons[button.getAttribute("onclick").match(/'([^']+)'/)[1]];
    });
}
