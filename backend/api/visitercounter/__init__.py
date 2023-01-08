import logging
import azure.functions as func
from azure.cosmos import CosmosClient, partition_key
import os 
import json

logging.basicConfig(level= logging.DEBUG)
def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    URL = os.environ['URI']
    KEY = os.environ['PrimaryKey']
    client = CosmosClient(URL, credential=KEY)
    DATABASE_NAME = 'azureresume'
    database = client.get_database_client(DATABASE_NAME)
    CONTAINER_NAME = 'Counter'
    container = database.get_container_client(CONTAINER_NAME)
    
    
    item_id = "1"
    item = container.read_item(item_id, partition_key="1")
    json_data = json.dumps(item)
    count = item["count"]
    updated_count = int(count)+1
    item["count"]= updated_count
    container.replace_item(item_id,item,partition_key="1")
    return func.HttpResponse(json_data)
