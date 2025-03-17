# card 2
import pandas as pd
import sys

"""
This imports data from basic_table.json
and then selects just 'is_oa' column, filters for 'True' values,
and then saves out a single value into csv and stdout.
"""
# Load the data
def load_data(file_path):
    df = pd.read_json(file_path)

    # Filter for 'True' values in 'is_oa' column
    count = df['is_oa'].eq(True).sum()

    # Save the count to a CSV file
    df_count = pd.DataFrame({'count': [count]})
    df_count.to_csv('card_2.csv', index=False)

    # Print the count to stdout
    print(f"There are {count} that are OA")
    file=sys.stdout

    return count

load_data('basic_table.json')
