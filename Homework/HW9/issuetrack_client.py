from requests.auth import HTTPBasicAuth
import requests
import csv
import re

URL = "http://localhost:8000/"

# bugs per package
def get_bugs_per_package(url):
    bugs_per_package = {}

    while url:
        response = requests.get(url)
        body = response.json()
        url = body["next"]
        for result in body["results"]:
            if result["package"] not in bugs_per_package:
                bugs_per_package[result["package"]] = 1
            else:
                bugs_per_package[result["package"]] += 1
    return bugs_per_package

def write_bugs_per_package(body):
    with open("total_bugs_per_package.csv", "w", newline='', encoding='utf8') as csvfile:
        csv_writer = csv.writer(csvfile, delimiter=',', quotechar='"')
        csv_writer.writerow(["package", "total"])
        for item in body.items():
            csv_writer.writerow(item)

# comments per bug
def get_comments_per_bug(url):
    comments_per_bug = {}

    while url:
        response = requests.get(url)
        body = response.json()
        url = body["next"]
        for result in body["results"]:
            bug_url = result["bug"]
            try:
                bug = re.search("/(\d+)/", bug_url).group().replace('/', '')
                if bug not in comments_per_bug:
                    comments_per_bug[bug] = 1
                else:
                    comments_per_bug[bug] += 1
            except:
                continue
    return comments_per_bug

def write_comment_per_bug(body):
    with open("total_comments_per_bug.csv", "w", newline='', encoding='utf8') as csvfile:
        csv_writer = csv.writer(csvfile, delimiter=',', quotechar='"')
        csv_writer.writerow(["bug_id", "total"])
        for item in body.items():
            csv_writer.writerow(item)

def main():
    x = get_bugs_per_package(URL+'bugs')
    write_bugs_per_package(x)

    y = get_comments_per_bug(URL+'comments')
    write_comment_per_bug(y)


if __name__ == '__main__':
    main()