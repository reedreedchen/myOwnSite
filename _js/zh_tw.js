var currentLang="en";
function translate(){
    if (document.documentElement.lang == "en")
    {//traslate to traditional chinese

	    currentLang = "zh-Hant-TW";
	    document.documentElement.lang = currentLang;
	    document.getElementById("languageButton").innerHTML = "English <-";
	    document.getElementById("languageButton").setAttribute("lang", "en")
	    document.getElementById("messageBoard").innerHTML = "留言板";
		document.getElementById("thisSite").innerHTML = "網站更新誌";

		document.getElementById("csDeveloper").innerHTML = "C#, Unity 互動開發";

		document.title="Renee 的家"
		document.getElementById("bio").innerHTML = "個人簡介";
		document.getElementById("demoReel").innerHTML = "作品剪輯";
		document.getElementById("gallery").innerHTML = "3D創作";
		document.getElementById("animation").innerHTML = "完整動畫";
		document.getElementById("designOther").innerHTML = "視覺化";
		document.getElementById("publication").innerHTML = "出版文獻";
		document.getElementById("scripting").innerHTML = "程式設計";

		document.getElementById("demoReelTitle").innerHTML = "作品剪輯";
		document.getElementById("demoReelContent").innerHTML = "我在俄亥俄超級電腦中心參與開發<i>居家護理模擬訓練 (The Home Healthcare Project)</i>專案的桌面版本與虛擬實境版本。此專案由美國國家職業安全衛生研究所(NIOSH)贊助。";

		document.getElementById("galleryTitle").innerHTML = "3D創作";
		document.getElementById("clickPreview").innerHTML = "* 點選預覽圖有更多細節。";
		document.getElementById("clickPreview1").innerHTML = "* 點選預覽圖有更多細節。";

		document.getElementById("research").innerHTML = "出版文獻";
		document.getElementById("research2").innerHTML = "居家照護工作者安全訓練模擬電玩";

		document.getElementById("scriptingTitle").innerHTML = "程式語言";

		document.getElementById("clickGit").innerHTML = "* 點選與查看我的 "
        document.getElementById("clickGit1").innerHTML = "頁面。"
		document.getElementById("clickGit2").innerHTML = "* 若您對完整遊戲有興趣請來信要求。";


		document.getElementById("3DCreation1").innerHTML = "實時演算-居家護理模擬計畫 - 5 張圖片";
		document.getElementById("3DCreation2").innerHTML = "介面設計-居家護理模擬計畫 - 3 張圖片";
		document.getElementById("3DCreation3").innerHTML = "環境-居家護理模擬計畫 - 8 張圖片";
		document.getElementById("3DCreation4").innerHTML = "角色-盒子裡的母親 - 14 張圖片";
		document.getElementById("other").innerHTML = "視覺化";
		document.getElementById("other1").innerHTML = "關卡設計-<i>Forsaken</i> - 3 張圖片";
		document.getElementById("other2").innerHTML = "資料圖表-<i>TWO</i> - 4 張圖片";
		document.getElementById("other3").innerHTML = "Flash 動畫與視覺設計-<i>SWSS</i> - 10 張圖片";
		
		document.getElementById("animationTitle").innerHTML = "完整動畫";
		document.getElementById("vimeo1").innerHTML = "大冒險 ";
		document.getElementById("vimeo2").innerHTML = "肚子上的怪東西 ";
		document.getElementById("vimeo3").innerHTML = "立方貓";
		document.getElementById("vimeo4").innerHTML = "埋葬獨角獸 ";
		document.getElementById("vimeo5").innerHTML = "天使心靈 ";
		document.getElementById("collaborative").innerHTML = "此動畫是我與 Xiaoshu Wang 和 Shumeng Zhao 的聯合創作。";
		document.getElementById("vimeo1_explain").innerHTML = "的故事是作者們從 Steve Samler 的音樂創作中得到的畫面。 隨著音樂，女孩展開了她的奇幻冒險。";
		document.getElementById("vimeo2_explain").innerHTML = "討論一個困擾著我以及許許多多的人的問題--我們對於身體某些特徵感到羞恥，但又不得不承認那也是一部份的自我。";
		document.getElementById("vimeo3_explain").innerHTML = "是一部風格強烈的動畫，表達我初到美國難以融入群體的孤獨感。此動畫中的風格啟發於電玩 <i>Sushi Cat</i> (Armor Games製作)。 [";
		document.getElementById("vimeo4_explain").innerHTML = "表現我創作此作品的那段日子，對於無力繳學費，學業可能無法繼續下去的心情。 [";
		document.getElementById("vimeo5_explain").innerHTML = " 解釋了我對於「邪惡」一詞的想法。我認為一個人的邪惡源於環境而非自身，我相信一個人的邪惡不該只怪罪於個人。此動畫只演示了第一部份。 [";
		document.getElementById("vimeo_board1").innerHTML = "分鏡圖";
		document.getElementById("vimeo_board2").innerHTML = "分鏡圖";
		document.getElementById("vimeo_board3").innerHTML = "分鏡圖";
		document.getElementById("closeLink").innerHTML = "收起頁面";



	    //bio
		document.getElementById("bioTitle").innerHTML = "個人簡介";
		document.getElementById("bioTag").innerHTML = "我與小瑪狗";
		document.getElementById("p1").innerHTML = "我是Renee，我是一名軟體工程師，我最有興趣的地方是互動設計。我在2011年從台灣的龍華科技大學多媒體遊戲系畢業拿到工學土 (B.S.) 學位。之後我繼續在同一個領域進修，並於2016年從俄亥俄州立大學的設計系的動畫與互動媒體學程畢業，獲頒藝術創作碩士 (M.F.A) 學位。"
		document.getElementById("p2").innerHTML = "除了科技以外，我對人文議題，我對於流行文化、社會心理學、與女學都有興趣。我相信互動設計與人類經驗是不可分割的。我的目標是將知識與研究帶入工作，從多方面尋找可以為客戶達成目的的方案，作有深度的的互動媒體工程師。";
		document.getElementById("p3").innerHTML = "近年來，我在ACCAD、俄亥俄超級電腦中心、和AEP作研究。我曾與許多學者和其它工程師合作製作軟體，其領域包含研究、教育、職業訓練、與商業活動。我的工作內容包含介面設計、資料處裡、與軟體優化等。我目前的工作是一名軟體顧問並為有手機軟體、網頁軟體、或遊戲軟體製作需求的客戶提供解決方案。";
	}
		
	else if(document.documentElement.lang=="zh-Hant-TW"){//translate to english

	    currentLang = "en";
	    document.documentElement.lang = currentLang;

	    document.title = "Renee Home"


        //rightBot
		document.getElementById("messageBoard").innerHTML = "Message Board";
		document.getElementById("languageButton").innerHTML = "-> 繁體中文";
		document.getElementById("languageButton").setAttribute("lang","zh-Hant-TW");
        document.getElementById("thisSite").innerHTML = "Update Log";

        document.getElementById("csDeveloper").innerHTML = "C#, Unity Developer";
        //links
        document.getElementById("bio").innerHTML = "Bio";
        
		document.getElementById("demoReel").innerHTML = "Demo Reel";
		document.getElementById("gallery").innerHTML = "3D Creation";
		document.getElementById("animation").innerHTML = "Animation";
		document.getElementById("designOther").innerHTML = "Visualization";
		document.getElementById("publication").innerHTML = "Publication";
		document.getElementById("scripting").innerHTML = "Scripting";
		document.getElementById("clickGit").innerHTML = "* Click and view to my "
		document.getElementById("clickGit1").innerHTML = " page."
		document.getElementById("clickGit2").innerHTML = "* Please send me an email if you would like to play the full game.";

        //reel
		document.getElementById("demoReelTitle").innerHTML = "Demo Reel";
		document.getElementById("demoReelContent").innerHTML = "I participated in developing the desktop version & the VR version of the <i>Home Healthcare Training</i> project at Ohio Supercomputer Center(OSC). This project is funded by The National Institute for Occupational Safety and Health(NIOSH).";

        //3d Creation
		document.getElementById("galleryTitle").innerHTML = "3D Creation";
		document.getElementById("clickPreview").innerHTML = "* Click on the images for details.";

        //research
		document.getElementById("research").innerHTML = "Research";
		document.getElementById("research2").innerHTML = "<i>Gaming Simulation as Health and Safety Training for Home Health Care Workers</i>";

        //scripting
		document.getElementById("scriptingTitle").innerHTML = "Scripting";
		document.getElementById("3DCreation1").innerHTML = "Real Time Rendering-<i>Home Healthcare</i> - 5 images";
		document.getElementById("3DCreation2").innerHTML = "UI Design-<i>Home Healthcare</i> - 3 images";
		document.getElementById("3DCreation3").innerHTML = "Environment-<i>Home Healthcare</i> - 8 images";
		document.getElementById("3DCreation4").innerHTML = "Character-<i>Mom in the Box</i> - 14 images";


        //visualization
		document.getElementById("other").innerHTML = "Visualization";
		document.getElementById("other1").innerHTML = "Level Design-<i>Forsaken</i> - 3 images";
		document.getElementById("other2").innerHTML = "Data Visualization-<i>TWO</i> - 4 images";
		document.getElementById("other3").innerHTML = "Flash, Graphic Design-<i>SWSS</i> - 10 images";
		document.getElementById("clickPreview1").innerHTML = "* Click on the images for details.";

        //animation
		document.getElementById("animationTitle").innerHTML = "Animation";
		document.getElementById("vimeo1").innerHTML = "<i>Adventure Comedy</i> ";
		document.getElementById("vimeo2").innerHTML = "<i>The Thing on My Belly</i> ";
		document.getElementById("vimeo3").innerHTML = "<i>Square Cat</i>";
		document.getElementById("vimeo4").innerHTML = "<i>The Buried Unicorn</i> ";
		document.getElementById("vimeo5").innerHTML = "<i>Angel's Spirit</i>";
		document.getElementById("collaborative").innerHTML = "Collaborative work with<br>Xiaoshu Wang and Shumeng Zhao";
		document.getElementById("vimeo1_explain").innerHTML = "expresses our imagination based off of the music written by Steve Samler. Following the  beat of the music, a girl starts a fantastic adventure.";
		document.getElementById("vimeo2_explain").innerHTML = "discusses identity issues many people are dealing with.";
		document.getElementById("vimeo3_explain").innerHTML = "is a stylized 3D an imation that addresses my thinking about feelings of isolation and not fitting in. The visual style is inspired by the game<i> Sushi Cat </i>(Armor Games). [";
		document.getElementById("vimeo4_explain").innerHTML = "demonstrates the stress of tuition in a humorous but slightly dark way. [";
		document.getElementById("vimeo5_explain").innerHTML = " explains my perspective about what causes people to become evil -- the environmental factors. I believe that not all individuals are to blame. This video demostrates the first part of the full story. [";
		document.getElementById("vimeo_board1").innerHTML = "storyboard";
		document.getElementById("vimeo_board2").innerHTML = "storyboard";
		document.getElementById("vimeo_board3").innerHTML = "storyboard";
		document.getElementById("closeLink").innerHTML = "Close";


	    //bio
		document.getElementById("bioTitle").innerHTML = "Bio";
		document.getElementById("bioTag").innerHTML = "Renee and Emma";
		document.getElementById("p1").innerHTML = "Renee is a software developer and has a lifelong passion in interaction design. In 2011, she completed her Bachelor of Science degree in Multimedia and Game Science at Lunghwa University of Science and Technology in Taiwan. She continued to strive for excellence in interactive design by pursuing graduate studies. She graduated from the Ohio State University in 2016 with a Master of Fine Arts in Digital Animation and Interactive Media.";
		document.getElementById("p2").innerHTML = "Renee’s expertise in interaction design is not limited to technology. She also studied arts, social psychology, gender studies, and languages in addition to technical studies. She firmly believes that interactive design cannot be separated from human experience. She has depth as an interaction designer and software developer by combining her educational knowledge and research experience into her work. She explores multiple aspects of an issue to clarify and seek resolution for her clients.";
		document.getElementById("p3").innerHTML = "In recent years, she worked at ACCAD, the Interface Lab of OSC, and AEP. She has collaborated with professionals in many different disciplines and other software engineers to produce software for research, education, career training, and commercial use. She has extensive experience working on UI, integration, data management, and optimization. She is currently a software consultant and is providing solutions regarding mobile application development, web application development, and computer game development. ";
	}
	localStorage.setItem ('lang', currentLang);
		
}

function detectLang() //darkboard
{ 
	currentLang = localStorage.getItem('lang');
	document.documentElement.lang = currentLang;
	if(document.title=="Update Log | reneechenwork.com")//thisSite
	{
		if(currentLang == "en")
		{
			document.getElementById("aboutThisSite").innerHTML="Update Log";
			document.getElementById("updateText").innerHTML = "* This page documents the update history of this website.";
		}
		else if(currentLang == "zh-Hant-TW")
		{
		    document.getElementById("aboutThisSite").innerHTML = "網站更新誌";
		    document.getElementById("updateText").innerHTML = "* 此頁面用於記錄此網站的更新狀態。";
		}

	}else if (document.title == "Message Board")//thisSite
    {
        if (currentLang == "en") {
            document.getElementById("messageBoard").innerHTML = "Message Board";
            document.getElementById("nameText").innerHTML = "Name:";
            document.getElementById("emailText").innerHTML = "Email:";
            document.getElementById("msgText").innerHTML = "Message:";
            document.getElementById("privateText").innerHTML = "Private:";
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javascript:void(0)' onclick='writeUserData()'>save</a> <a class='pinkText' href='javascript:void(0)' onclick='openBox()'>close</a>"

            
        }
        else if (currentLang == "zh-Hant-TW") {
            document.getElementById("messageBoard").innerHTML = "留言板";
            document.getElementById("nameText").innerHTML = "姓名:";
            document.getElementById("emailText").innerHTML = "電子信箱:";
            document.getElementById("msgText").innerHTML = "留言內容:";
            document.getElementById("privateText").innerHTML = "隱藏:";
            document.getElementById('toggleMessageLink').innerHTML = "<a class='pinkText' href='javascript:void(0)' onclick='writeUserData()'>儲存</a> <a class='pinkText' href='javascript:void(0)' onclick='openBox()'>關閉</a>"
        }
	} else if (document.title == "Legal Status FAQ | reneechenwork.com")//thisSite
	{
	    if (currentLang == "en") {
	        document.getElementById("statusTitle").innerHTML = "Legal Status FAQ";
	        document.getElementById("statusText").innerHTML = "* This page is written to clarify my legal status to USA employers.";
	        
	    }

	}
}
$('a.switchLanguage').click(translate);

