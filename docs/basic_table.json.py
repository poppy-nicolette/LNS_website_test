import pandas as pd
import openpyxl
import json
import sys
"""
This imports data from the LNS full metadata excel file
and then selects just the columns specified.
This is then converted to json and dumped to stdout.
"""
# Load the data
def load_data(file_path):
    df = pd.read_excel(file_path)

    # select columns
    selected_columns = [
        'doi',
        'publication_year',
        'is_oa',
        'license',
        'version'
    ]
    df_selected = df[selected_columns]

    #convert to json
    json_data = df_selected.to_json(orient='records')

    with open('basic_table.json', 'w') as f:
        f.write(json_data)

load_data('data/LNS_openalex_full_metadata.xlsx')
