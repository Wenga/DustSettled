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
        div9: "[ --- Waiting to connect to cloud memory --- ]",
        div10: "How's the food? Does it taste alright?",
        div11: "I really hope the way it looked didn't make you uncomfortable.",
        div12: "I asked the chef to create this dish in a way that represents how I was feeling back then...",
        div13: "Would you mind putting the glasses back on?",
        div14: "I… I want you to see what happens next.",
        div15: "What did you think of the second dish? It was a birthday cake... but it melted pretty quickly, didn’t it?",
        div16: "That’s kind of how my life has felt these past few years—everything looked happy and great on the outside, but deep down, there was this constant sense of unease I just couldn’t get rid of.",
        div17: "It was like all the happiness could just disappear, like a fragile bubble…",
        div18: "And then, eventually, I realized that feeling wasn’t for nothing.",
        div19: "Put the glasses back on, and you’ll see what I mean...",
        div20: "[ --- Waiting to connect to cloud memory --- ]",
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
        div9: "[ --- 等待连接至云端记忆 --- ]",
        div10: "你吃得还好吗？这道菜合胃口吗？",
        div11: "希望料理的样子没有让你感到不适。",
        div12: "这道料理，其实是我让主厨特别设计的，想要表达我当时的心情……",
        div13: "现在能否请你再戴上眼镜？",
        div14: "我……想让你继续看看接下来的事情。",
        div15: "你觉得第二道菜怎么样？是个生日蛋糕……不过它很快就融化了，对吧？",
        div16: "这其实就像我过去几年生活的感觉——表面上看起来幸福美满，但心里总有种说不清的隐隐不安。",
        div17: "眼前的一切像是随时会破灭的美丽泡沫……",
        div18: "直到后来，我才意识到，这种不安不是没来由的。",
        div19: "请你再次戴上眼镜，你就会明白我为什么这么说了……",
        div20: "[ --- 等待连接至云端记忆 --- ]",
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
    document.getElementById('div9').textContent = translations[language].div9;
    document.getElementById('div10').textContent = translations[language].div10;
    document.getElementById('div11').textContent = translations[language].div11;
    document.getElementById('div12').textContent = translations[language].div12;
    document.getElementById('div13').textContent = translations[language].div13;
    document.getElementById('div14').textContent = translations[language].div14;
    document.getElementById('div15').textContent = translations[language].div15;
    document.getElementById('div16').textContent = translations[language].div16;
    document.getElementById('div17').textContent = translations[language].div17;
    document.getElementById('div18').textContent = translations[language].div18;
    document.getElementById('div19').textContent = translations[language].div19;
    document.getElementById('div20').textContent = translations[language].div20;

    const divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9','div10','div11','div12','div13','div14','div15','div16','div17','div18','div19','div20'];

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