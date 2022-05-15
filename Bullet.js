export default class Bullet {
    constructor(x, y, speed, dmg) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.dmg = dmg;
        
        this.width = 3;
        this.height = 10;
        this.color = "red";
    }

    // draw the bullet
    draw (ctx) {
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // If sprite and bullet overlap
    collideWith (sprite) {
        if (this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height > sprite.y) {
                sprite.takeDamage(this.dmg);
                return true;
            } 
            return false;
    }
}