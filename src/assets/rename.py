import os
path = './bg/'
files = os.listdir(path)


for index, file in enumerate(files):
    # print(index, file)
    os.rename(os.path.join(path, file), os.path.join(path, ''.join([str(index), '.jpg'])))