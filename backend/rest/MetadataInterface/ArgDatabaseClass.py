from rest.DataBaseInterface.DataBaseClass import DataBase

class ArgDataBase():
    def __init__(self):
        self.table = "init"
        self.database = DataBase()
    
    def list(self):
        return self.database.find(self.table, {})