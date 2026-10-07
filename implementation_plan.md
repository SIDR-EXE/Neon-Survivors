# 🎨 New Project: Neon Turf War

We will absolutely make all four of them eventually, but starting with the Paint/Turf War idea is brilliant. It’s highly competitive, strategic, and the visual feedback of covering the map in your team's color is incredibly satisfying!

To achieve **Local + Online Multiplayer** with both **Keyboard and Controller** support, we will build this from the ground up using a modern Client-Server Architecture. 

Here is the plan to build our turf war game!

---

## Technical Architecture

We will create a new folder on your Desktop (`Desktop\neon_turf_war`) so we don't accidentally overwrite our finished *Neon Survivors* game.

### 1. The Server (Node.js + Socket.io)
Online multiplayer requires a central server to ensure everyone sees the same painted floor.
- The server will run the "authoritative" game state (tracking player positions, health, and a giant grid representing the painted floor).
- It will use **Socket.io** to sync the state of the painted tiles to all connected players in real-time.

### 2. The Client (HTML5 Canvas)
The frontend will handle all the heavy graphics rendering and read inputs from the players.

### 3. The Unified Input Manager
We will build a custom input system that seamlessly handles all setups so your friends can play however they want:
- **Local Keyboard/Mouse:** Player 1 uses WASD to move and Mouse to aim/shoot paint.
- **Local Controllers:** We will use the HTML5 `Gamepad API` to detect plugged-in Xbox/PlayStation controllers. (Left stick moves, Right stick aims, Trigger shoots paint).
- **Online Mode:** The game will automatically route inputs over the internet to the server if friends connect from different computers.

---

## Proposed Implementation Phases

### Phase 1: Server Setup & Networking
- [NEW] Initialize a Node.js project.
- [NEW] Set up Express and install Socket.io.
- [NEW] Create a lobby system where players can join (assigning them to Team Cyan or Team Pink).

### Phase 2: The Paint Engine
- Build the arena grid. 
- Implement the core mechanic: when players move or shoot, the tiles underneath them permanently change to their team's color.
- Create a UI element showing the live percentage of the map controlled by each team.

### Phase 3: Input & Twin-Stick Movement
- Implement the `Gamepad API` to detect analog sticks for precise movement and 360-degree aiming.
- Implement Keyboard + Mouse aiming.

### Phase 4: Combat & Weapons
- Add paint guns! Shooting the enemy team splats them (sending them back to respawn) and covers the area in your color.
- Add an ink-swimming mechanic (optional): players move 2x faster when walking on their own team's color, but get slowed down on the enemy's color.

---

## Open Questions

Before we write the code, I need to know your preference on a few design choices:

1. **Ink Mechanics:** Should players have infinite paint, or should they have to "reload" their paint gun by hiding/swimming in their own team's color (like Splatoon)?
2. **Camera:** Should the camera stay locked to a single arena so everyone is always on screen, or should the map be larger than the screen, requiring the camera to follow the player?

> [!IMPORTANT]
> Since we are starting a completely new project, I will be executing terminal commands to create the new folder and install the Node packages. 

Please review the plan, answer the questions, and click **Proceed** when you are ready to start building Neon Turf War!
