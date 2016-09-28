/**
 * Star rating class
 * @constructor
 */
function StarRating() {
  this.init();
};

/**
 * Initialize
 */
StarRating.prototype.init = function() {
  this.stars = document.querySelectorAll('#rating span');
  for (var i = 0; i < this.stars.length; i++) {
    this.stars[i].setAttribute('data-count', i);
    this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
  }
  document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating element, effectively removing all hover states.
 */
StarRating.prototype.leaveStarListener = function() {
  this.fillStarsUpToElement(null);
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
 */
StarRating.prototype.fillStarsUpToElement = function(el) {
  // Remove all hover states:
  for (var i = 0; i < this.stars.length; i++) {
    if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      this.stars[i].classList.remove('hover');
    } else {
      this.stars[i].classList.add('hover');
    }
  }
};

// Run:
new StarRating();
