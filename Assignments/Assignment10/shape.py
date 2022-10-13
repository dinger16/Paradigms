import tkinter as tk

class CanvasRectangle:
    width = 400
    height = 300
    rect_width = 15
    rect_height = 15

    def __init__(self, root):
        self.root = root
        self.canvas = tk.Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.canvas.create_rectangle(self.width/2 - self.rect_width/2, self.height/2 - self.rect_height/ 2, self.width/2 + self.rect_width/2,
                self.height/2 + self.rect_height/2, fill="blue")

if __name__ == '__main__':
    root = tk.Tk()
    app = CanvasRectangle(root)
    root.mainloop()