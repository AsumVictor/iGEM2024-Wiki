document.addEventListener('DOMContentLoaded', function() {
    // Initialize sections for scroll-based animation
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            if (sectionTop < screenPos) {
                section.style.transform = 'scale(1.05)';
            } else {
                section.style.transform = 'scale(1)';
            }
        });
    });

    // Set up the aquarium effect using p5.js
    let script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        new p5(p => {
            let fishImg;
            const fishes = [];  // Array to hold multiple fish
            let bubbles = [];

            p.preload = () => {
                fishImg = p.loadImage('https://rawcdn.githack.com/Lesliekonlack/IgemImages/3cde690a9d0d8645421e1caa5a7c2746ddfb5359/Image.heic');
            };

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                for (let i = 0; i < 20; i++) {
                    fishes.push(new Fish(p.random(p.width), p.random(p.height)));
                    bubbles.push(new Bubble(p.random(p.width), p.random(p.height), p.random(1, 5)));
                }
            };

            p.draw = () => {
                p.clear();
                p.background('rgba(0, 100, 150, 0.6)');  // Water color

                // Draw bubbles for additional effect
                bubbles.forEach(bubble => {
                    bubble.move();
                    bubble.display();
                });

                fishes.forEach(fish => {
                    fish.move();
                    fish.display();
                });
            };

            class Fish {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.speedX = p.random(-2, 2);
                    this.speedY = p.random(-1, 1);
                    this.facing = this.speedX < 0 ? -1 : 1;
                }

                move() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.x < 0) this.x = p.width;
                    if (this.x > p.width) this.x = 0;
                    if (this.y < 0) this.y = p.height;
                    if (this.y > p.height) this.y = 0;
                }

                display() {
                    p.push();
                    p.translate(this.x, this.y);
                    p.scale(this.facing, 1);
                    p.image(fishImg, 0, 0, fishImg.width / 20, fishImg.height / 20);
                    p.pop();
                }
            }

            class Bubble {
                constructor(x, y, size) {
                    this.x = x;
                    this.y = y;
                    this.size = size;
                }

                move() {
                    this.y -= 0.5;
                    if (this.y < 0) this.y = p.height;
                }

                display() {
                    p.fill(255);
                    p.noStroke();
                    p.circle(this.x, this.y, this.size);
                }
            }
        });
    };
});
