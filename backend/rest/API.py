from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import base64
from config import add_path
add_path
from rest.ARGsClass import GENE
from rest.AntibioticClass import Antibiotic

# Antibiotic resistance init
ARG = GENE()
ANTIBIOTIC_LABELS = Antibiotic()

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify(message = "ARG-inspect REST API")

@app.route('/get/arg/metadata/<gene_id>', methods = ['GET','POST'])
def metadata(gene_id):
    metadata = ARG.metadata(gene_id)
    return jsonify(metadata)

@app.route('/get/arg/besthit/<gene_id>', methods = ['GET','POST'])
def besthit(gene_id):
    besthit = ARG.bestHit(gene_id)
    return jsonify(besthit)

@app.route('/get/arg/pathogen/<gene_id>', methods = ['GET','POST'])
def pathogen(gene_id):
    pathogen = ARG.pathogen(gene_id)
    return jsonify(pathogen)

@app.route('/get/arg/random/', methods = ['GET','POST'])
def random():
    random = ARG.random()
    return jsonify(random)

@app.route('/get/arg/<gene_id>', methods = ['GET','POST'])
def getarg(gene_id):
    arg = ARG.getARG(gene_id)
    return jsonify(arg)

@app.route('/get/antibiotic/class', methods = ['GET','POST'])
def GetAntibioticClass():
    arg = ANTIBIOTIC_LABELS.ListARGType()
    return jsonify(arg)

