import time
import random
import string

while 1:
    with open("/app/logs","a+") as f:
        f.write("\n" + time.ctime()+ " : ")
        time.sleep(5)
