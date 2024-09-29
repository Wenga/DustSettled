let currentDiv = 0;

function showNextDiv() {
    // Get all div elements with the class
    const divs = document.querySelectorAll('.message-container');
    const container = document.getElementById('container');
    const sound = document.getElementById('notification-sound')
    

    // Check if there are more divs to show
    if (currentDiv < divs.length) {
        divs[currentDiv].classList.remove('hidden');  
        divs[currentDiv].classList.add('visible');    
        currentDiv++;  // Move to the next div

        // Automatically scroll to the bottom of the container
        container.scrollTop = container.scrollHeight;

        sound.play();
    }
    
}

const translations = {
    en: {
        div1: "Hello, we haven’t met before, but I was hoping to ask you for a small favor.",
        div2: "It won’t cost you anything or take much effort, I just need your help in making a decision. As a thank you, I’ve already taken care of the bill for this meal.",
        div3: "By the way, I ordered the drink on the table without alcohol for you. Hope you like it.",
        div4: "Do you drink at all? I used to, a lot actually. But I quit some time ago.",
        div5: "I always thought having a couple drinks and losing my cool wasn’t that big of a deal. My son and daughter-in-law weren’t fans, but I figured they were being overly cautious.",
        div6: "Then something happened, and I finally realized, alcohol can truly be deadly.",
        div7: "Can you put on those glasses near you? They’ll connect to my memories and share them with you.",
        div8: "here’s something I really want you to see...",
        nextButton:"Show Next Message",
    },
    zh: {
        div1: "你好，我们俩没见过面，但我想请你帮个小忙。",
        div2: "不用花钱，也不费什么力气，只是需要你帮我做个决定。作为答谢，我已经替你付了这顿饭。",
        div3: "对了，桌上的这杯饮料我特地给你点了无酒精的，希望你喜欢。",
        div4: "你平时喝酒吗？我曾经很爱喝，不过已经戒了很久了。",
        div5: "我以前总觉得喝两杯，脾气火爆点不算什么大事。虽然我儿子和儿媳不喜欢，但我一直以为他们多管闲事。",
        div6: "直到那件事发生……我才明白，酒，真的能害死人。",
        div7: "能不能请你戴上你手边的那副眼镜？它能把我的记忆通过云端共享给你。",
        div8: "我有些事情，想让你亲眼看看……",
        nextButton:"显示下一条信息",
    }
}

function setLanguage(language) {
    // Update the content of the elements
    document.getElementById('div1').textContent = translations[language].div1;
    document.getElementById('div2').textContent = translations[language].div2;
    document.getElementById('div3').textContent = translations[language].div3;
    document.getElementById('div4').textContent = translations[language].div4;
    document.getElementById('div5').textContent = translations[language].div5;
    document.getElementById('div6').textContent = translations[language].div6;
    document.getElementById('div7').textContent = translations[language].div7;
    document.getElementById('div8').textContent = translations[language].div8;
    document.getElementById('nextButton').textContent = translations[language].nextButton;

    const divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8'];

    divs.forEach(divId => {
        const div = document.getElementById(divId);

        // Apply or remove the Chinese style
        if (language === 'zh') {
            div.classList.add('zh-style');
            div.classList.remove('en-style');  // Remove English style if present
        } else {
            div.classList.add('en-style');
            div.classList.remove('zh-style');  // Remove Chinese style if present
        }
    });
}