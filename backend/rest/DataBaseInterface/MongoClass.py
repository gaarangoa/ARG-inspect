from pymongo import MongoClient
from rest.config import MongoHost as config
import random

class Mongo():
    def __init__(self):
        self.client = MongoClient(config['hostdb'], config['hostdbport'])
        self.client.argpedia.authenticate(config['hostuser'], config['hostpwd'])
        self.db = self.client[config['database']]
    
    def find(self, table, query):
        responses = [i for i in self.db[table].find(query)]
        if not responses: return [{"status":False}]
        for response in responses:
            response["_id"] = str(response["_id"])
            response["status"] = True
        return responses
    
    def getByGeneId(self, table, gene_id):
        models = [i for i in self.db[table].find({"gene_id":gene_id})]
        # print model
        if not models: return [{"status":False}]
        for model in models:
            model["_id"] = str(model["_id"])
            model['status'] = True
        
        return models

    def getRandomGene(self, table):
        count = self.db[table].count();
        
        item = self.db[table].find({ 
            "$and":[ 
                { "inspected": { "$lt": 5 } }, 
                # { "database": "UNIPROT" }
            ]
        })
        item = [i for i in item]
        random.shuffle(item)
        item = item[0]

        item["_id"] = str(item["_id"])
        item['status'] = True
        # print item
        return item
    