// Trigger animation on button click
document.getElementById('triggerAnimationButton').addEventListener('click', function() {
    // Get the data from localStorage
    const animationStatus = localStorage.getItem('animationStatus');
  
    // Determine the action based on stored data
    if (animationStatus === 'on') {
      // Turn off the animation
      document.querySelector('.animated-element').classList.remove('animated');
      localStorage.setItem('animationStatus', 'off');
      alert('Animation has been stopped.');
    } else {
      // Turn on the animation
      document.querySelector('.animated-element').classList.add('animated');
      localStorage.setItem('animationStatus', 'on');
      alert('Animation has been started.');
    }
  });
  
  // Initial state check
  const initialAnimationStatus = localStorage.getItem('animationStatus') || 'off';
  document.querySelector('.animated-element').classList.toggle('animated', initialAnimationStatus === 'on');
  localStorage.setItem('animationStatus', initialAnimationStatus);
  
  // Store custom data and trigger animations based on different conditions
  function storeDataAndTrigger(type, data) {
    localStorage.setItem('animationTriggerData', JSON.stringify({ type: type, data: data }));
    // Trigger based on custom logic or data
    if (type === 'blink' && JSON.parse(localStorage.getItem('animationTriggerData')).data === 'true') {
      document.querySelector('.animated-element').classList.add('animated');
    } else {
      document.querySelector('.animated-element').classList.remove('animated');
    }
  }
  
  storeDataAndTrigger('blink', true);
