
class page:
    def __init__(self):
        self.name = ""
        self.content = ""

    def build(self):
        from config import config
        self.title = self.name + " - " + config.siteName
        self.header = config.header % (self.title)
        self.footer = config.footer % (config.siteCopyright)

        self.finalHtml = self.header + self.content + self.footer
        return self.name, self.finalHtml;