/*Text Change in header-----------------------------------------------*/
{
    let textChange = document.getElementById('textChange');
    let text1 = "محمد صادق رضائی";
    let text2 = "programmer-msr.ir";

    let typingInProgress = false;  
    let changeTextTimer;        

    function showTypingTexts() 
    {
      let str = "";
      if (changeTextTimer) clearInterval(changeTextTimer);
      changeTextTimer = setInterval(() => 
      {
        
        if (typingInProgress == true) return; //if typing is active , wait
        typingInProgress = true;
        textChange.innerHTML = '';

        //change text
        if (str === "") str = text1;
        else str = (str === text1) ? text2 : text1;

        //type letters
        let i = 0;
        let timerTypeLetters = setInterval(() => 
        {
          i++;

          //chane color of letters
          let t = str.substring(0, i);
          let msr_color =  'orangered'; 
          if(t.startsWith("p"))
          {
            t =   t.substring(0,11) + 
                  `<span style='color: ${msr_color};'>`  + t.substring(11,14) + `</span>`+
                  t.substring(14,t.length);
          }

          if(t.startsWith("م"))
          {
            if(t.length <= 5) t =  `<span style='color: ${msr_color};'>م</span>`  + t.substring(1,t.length);
            if(t.length >=6 && t.length <=10 ) t =  `<span style='color: ${msr_color};'>م</span>`  + "حمد" + `<span style='color: ${msr_color};'>ص</span>` + t.substring(6,t.length);
            if(t.length >10 && t.length <=15) t =  `<span style='color: ${msr_color};'>م</span>`  + "حمد" + `<span style='color: ${msr_color};'>ص</span>` + "ادق" + " " +  `<span style='color: ${msr_color};'>ر</span>` +  t.substring(11,t.length);
          }

          textChange.innerHTML = t;

          //
          if (i >= str.length) 
          {
            clearInterval(timerTypeLetters);
            typingInProgress = false;
          }
        }, 150);

      }, 2000);
    }
    showTypingTexts();
}

/*myIntroducing------------------------------------------------------------------*/
{
  let myIntroducing = document.getElementById('myIntroducing');
  let a = 0;
  let color = "#16baf5ff";
  let array = ['برنامه نویس','ویندوز','و','موبایل','و','سایت'];

  setInterval(() =>
  {  
    if(array[a]== "در" || array[a] == "و") a += 1;
     let t = array.slice(0, a).join(' ') +`<span style = "color:${color};">` +
    " " +  array[a] +`</span>` +
    " " + array.slice(a+1,a.length).join(' ');
 
    myIntroducing.innerHTML = t;
    a+=1;
    if(a>= array.length) a =0;

  },750);
  
}

/*skills-------------------------------------------------------------------------*/
{
  let mySkills = ["C#", "sql server", "EF", "winform", "ASP", "html", "css", "js" , "kotlin"];
  let skills_tag = document.getElementById("skills");
  let spacer = "\u00A0"; //  فاصله بین مهارت‌ها
  let leadingSpace = spacer.repeat(20); // فاصله اضافی در ابتدای نوار

  let mySkillsStr = leadingSpace + mySkills.join(spacer);
  let displayLength = 30; // طول نوار نمایش
  let index = 0;

  // دو بار رشته برای حلقه روان
  let doubleText = mySkillsStr + mySkillsStr;

  setInterval(() => 
  {
      skills_tag.innerHTML = doubleText.substring(index, index + displayLength);
      index = (index + 1) % mySkillsStr.length;
  }, 150);
}


/*for error in borwser instagram when drag-------------------------------------------*/
{
  let body = document.querySelector('body');
  body.addEventListener('dragstart', function(e)
  {
    e.preventDefault();
  });
}

