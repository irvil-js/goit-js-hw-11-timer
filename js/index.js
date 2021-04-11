const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
   timer: document.getElementById("timer-1"),
};

class CountdownTimer {

    constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
        this.selector = selector;
       
    }


    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        // const { days, hours, mins, secs } = component(deltaTime);
        this.component(deltaTime);
        this.timeFinish(deltaTime)
        
    }, 1000);
        

    component(deltaTime) {
    
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    
    const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    
    //  refs.days.textContent = `${days}`;
    // refs.hours.textContent = `${hours}`;
    // refs.mins.textContent = `${mins}`;
    //     refs.secs.textContent = `${secs}`;
        refs.timer.textContent = `${days} days : ${hours} hours : ${mins} mins : ${secs}secs`;
    }
    

    pad(value) {
    return String(value).padStart(2, '0');    
    }

    timeFinish(deltaTime) {
    if (deltaTime < 0) {
      clearInterval(this.intervalId);
      refs.timer.textContent = "The End";
    }
  }
}



refs.timer.setAttribute("style", "text-align: center; padding-top: 25%; font-size: 40px; ") 

 
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 10, 2021'),
});
