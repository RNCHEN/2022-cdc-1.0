# from sklearn import preprocessing
# import  pandas
# data={
#       'before':[77.56, 23.6, 16.84, 5.22, 16.95],
#       'after':[78.2, 25, 14.5, 5.2, 15.74],
#       }
# #用字典来存放数据
# price_frame=pandas.DataFrame(data)#把字典类型转化为dataframe对象
# min_max_normalizer=preprocessing.MinMaxScaler(feature_range=(0,1))
# #feature_range设置最大最小变换值，默认（0,1）
# scaled_data=min_max_normalizer.fit_transform(price_frame)
# #将数据缩放(映射)到设置固定区间
# price_frame_normalized=pandas.DataFrame(scaled_data)
# #将变换后的数据转换为dataframe对象
# print(price_frame_normalized)


#
#
#
#
#
# from sklearn import preprocessing
# import matplotlib.pyplot as plt
# import pandas
# import numpy as np
# data={'before':[77.56, 23.6, 16.84, 5.22, 16.95],
#       'after':[78.2, 25, 14.5, 5.2, 15.74],
#       }#用字典来存放数据
# price_frame=pandas.DataFrame(data)#把字典类型转化为dataframe对象
# normalizer=preprocessing.scale(price_frame)
# #沿着某个轴标准化数据集，以均值为中心，以分量为单位方差
# price_frame_normalized=pandas.DataFrame(normalizer,columns=['before','after'])
# #将标准化的数据转换为dataframe对象，将列名改为price
# # price_frame_normalized *= -100
# # price_frame_normalized += 20
# x = []
# for i in price_frame_normalized.before.values:
#     x.append(i)
# print(x)
# y = []
# for i in price_frame_normalized.after.values:
#     y.append(i)
# print(y)
#
# exit(0)
#
#
#
#
#
#
#
#
# print(price_frame_normalized)
# exit(0)
# x = [i for i in range(0,5,1)]
# x= np.array(x)
# print ('x',x,'type',type(x))
#
# y =[39.452275, 18.258462,15.603344, 11.039369,15.646549]
# print ('2y',y,'type',type(y))
# fig = plt.figure()
# plt.plot(x,y)
# plt.show()
#
from sklearn import preprocessing
import matplotlib.pyplot as plt
import pandas
import numpy as np
x = [77.56, 23.6, 16.84, 5.22, 16.95]
y = [78.2, 25, 14.5, 5.2, 15.74]
z= []
for i in range(0, len(x)):
    z.append( abs(y[i]-x[i]) )
print(z)
data={  'increase':z,
        'origin':x,
        'after':y
     }#用字典来存放数据
price_frame=pandas.DataFrame(data)#把字典类型转化为dataframe对象
normalizer=preprocessing.scale(price_frame)
#沿着某个轴标准化数据集，以均值为中心，以分量为单位方差
price_frame_normalized=pandas.DataFrame(normalizer,columns=['increase','origin','after'])
#将标准化的数据转换为dataframe对象，将列名改为price
price_frame_normalized *= 10
price_frame_normalized += 40
print(price_frame_normalized)

m = []
for i in price_frame_normalized.increase.values:
    m.append(round(i,2))
print(m)
n=[]
for i in price_frame_normalized.origin.values:
    n.append(round(i,2))
print(n)
p=[]
for i in price_frame_normalized.after.values:
    p.append(round(i,2))
print(p)