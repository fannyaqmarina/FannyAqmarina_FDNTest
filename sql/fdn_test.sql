PGDMP     .                    z            fdn_test    14.3    14.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    fdn_test    DATABASE     k   CREATE DATABASE fdn_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Indonesian_Indonesia.1252';
    DROP DATABASE fdn_test;
                postgres    false                      0    16406    customer 
   TABLE DATA           3   COPY public.customer (id, name, email) FROM stdin;
    public          postgres    false    212   ?	                 0    16415    products 
   TABLE DATA           3   COPY public.products (id, name, price) FROM stdin;
    public          postgres    false    214   <
                 0    16431    transaction_table 
   TABLE DATA           R   COPY public.transaction_table (id, id_customer, id_product, quantity) FROM stdin;
    public          postgres    false    216   ?
       	          0    16396 	   transaksi 
   TABLE DATA           K   COPY public.transaksi (id, name, email, item, quantity, price) FROM stdin;
    public          postgres    false    210   ?
                  0    0    customer_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.customer_id_seq', 1, false);
          public          postgres    false    211                       0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 1, false);
          public          postgres    false    213                       0    0    transaction_table_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.transaction_table_id_seq', 1, false);
          public          postgres    false    215                        0    0    transaksi_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.transaksi_id_seq', 1, false);
          public          postgres    false    209               p   x?3???ͭTpJ???,1r3s???s??8?????3S?S?9??l??1?Wiqi??wbNN"g???4??OJ-*Qp/JL?L?,?򦜎y??9?ɉ?? B&F??? ??19         5   x?3?tJ,J?K7?45 .#(??7???9?@\&P?	T??7????qqq j?w         >   x????@???0??Z?؅????Q,?ҩ!?4?k,?*X~??m,???/??q????l???
F      	   ?   x????
?0???+?1??c׺)?])t?M???&?????UA?fuw?C???~?H???Cf?6~?"?d?Q`@??1?л?S??Γv?і9?ջzzgi???ɓ6???cI9+a?D?ʕ???DKp?o???l????ٮ??u?ݲ????:??h ?"SF???щ?>!?榍?     