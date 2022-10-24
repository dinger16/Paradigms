import tkinter as tk

class Robot:
    width = 400
    height = 300
    step = 10
    direction = ['N', 'E', 'S', 'W']
    cur_dir = 0

    def __init__(self, root):
        self.root = root
        self.root.title("Where is the robot?")

        self.canvas = tk.Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.robot_image = tk.PhotoImage(file=f"robot.png")
        self.robot = self.canvas.create_image(self.width/2, self.height/2, anchor=tk.CENTER, image=self.robot_image)

        print(self.canvas.coords(self.robot))

        self.root.bind('<Button-1>', self.move_robot)

    def move_robot(self, event):
        if self.direction[self.cur_dir] == 'N':
            self.canvas.move(self.robot, 0, -self.step)
        elif self.direction[self.cur_dir] == 'E':
            self.canvas.move(self.robot, self.step, 0)
        elif self.direction[self.cur_dir] == 'S':
            self.canvas.move(self.robot, 0, self.step)
        elif self.direction[self.cur_dir] == 'W':
            self.canvas.move(self.robot, -self.step, 0)

        self.step += 10
        self.cur_dir = (self.cur_dir + 1 ) % len(self.direction)
        coords = self.canvas.coords(self.robot)
        print(coords)
        
        if (coords[0] + 16 > self.width or coords[0] - 16 < 0 or coords[1] + 16 > self.height or coords[1] - 16 < 0):
            self.canvas.coords(self.robot, self.width/2, self.height/2)
            self.cur_dir = 0
            self.step = 10

if __name__ == '__main__':
    root = tk.Tk()
    app = Robot(root)
    root.mainloop()