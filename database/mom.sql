PGDMP                     
    x            mom     13.1 (Ubuntu 13.1-1.pgdg18.04+1)    13.0 A    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    16385    mom    DATABASE     T   CREATE DATABASE mom WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';
    DROP DATABASE mom;
                mom    false            �            1259    16386    admin    TABLE     "  CREATE TABLE public.admin (
    id text NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    role text,
    status integer DEFAULT 1 NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL,
    email text NOT NULL,
    type integer
);
    DROP TABLE public.admin;
       public         heap    mom    false            �            1259    16394    bulk    TABLE     z   CREATE TABLE public.bulk (
    id text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    image text
);
    DROP TABLE public.bulk;
       public         heap    mom    false            �            1259    16400 
   bulk_order    TABLE     �   CREATE TABLE public.bulk_order (
    id text NOT NULL,
    bulk text NOT NULL,
    customer text NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL,
    quantity double precision DEFAULT 0 NOT NULL
);
    DROP TABLE public.bulk_order;
       public         heap    mom    false            �            1259    16415    customer    TABLE     �   CREATE TABLE public.customer (
    id text NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    address text NOT NULL,
    password text NOT NULL,
    token text
);
    DROP TABLE public.customer;
       public         heap    mom    false            �            1259    16421    faq    TABLE     �   CREATE TABLE public.faq (
    id text NOT NULL,
    question text NOT NULL,
    answer text NOT NULL,
    code integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.faq;
       public         heap    mom    false            �            1259    16444 	   have_bulk    TABLE     �   CREATE TABLE public.have_bulk (
    id text NOT NULL,
    bulk text NOT NULL,
    mom text NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.have_bulk;
       public         heap    mom    false            �            1259    16451    helpline    TABLE     i   CREATE TABLE public.helpline (
    id text NOT NULL,
    title text NOT NULL,
    phone text NOT NULL
);
    DROP TABLE public.helpline;
       public         heap    mom    false            �            1259    16465    mom    TABLE     �   CREATE TABLE public.mom (
    id text NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    address text,
    district text,
    password text NOT NULL,
    role text,
    token text,
    contact_person text,
    upi text
);
    DROP TABLE public.mom;
       public         heap    mom    false            �            1259    16471    news    TABLE     �   CREATE TABLE public.news (
    id text NOT NULL,
    title text NOT NULL,
    body text NOT NULL,
    image text,
    status integer DEFAULT 1 NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.news;
       public         heap    mom    false            �            1259    16479    notice    TABLE     �   CREATE TABLE public.notice (
    id text NOT NULL,
    caption text NOT NULL,
    description text NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.notice;
       public         heap    mom    false            �            1259    16486    product    TABLE     4  CREATE TABLE public.product (
    id text NOT NULL,
    name text NOT NULL,
    price text,
    fssai_id text,
    image text NOT NULL,
    description text,
    mom text NOT NULL,
    status boolean DEFAULT false NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL,
    code integer
);
    DROP TABLE public.product;
       public         heap    mom    false            �            1259    16494    product_order    TABLE       CREATE TABLE public.product_order (
    id text NOT NULL,
    product text NOT NULL,
    customer text NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL,
    quantity integer DEFAULT 0 NOT NULL,
    status integer DEFAULT 1 NOT NULL
);
 !   DROP TABLE public.product_order;
       public         heap    mom    false            �            1259    16502    query    TABLE     V  CREATE TABLE public.query (
    id text NOT NULL,
    message text NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    created timestamp without time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text NOT NULL,
    address text NOT NULL,
    subject text,
    read boolean DEFAULT false NOT NULL
);
    DROP TABLE public.query;
       public         heap    mom    false            �            1259    16518 	   vegetable    TABLE     �   CREATE TABLE public.vegetable (
    id text NOT NULL,
    caption text NOT NULL,
    description text NOT NULL,
    image text,
    created timestamp without time zone DEFAULT now() NOT NULL,
    mom text NOT NULL
);
    DROP TABLE public.vegetable;
       public         heap    mom    false            �          0    16386    admin 
   TABLE DATA           ^   COPY public.admin (id, name, phone, password, role, status, created, email, type) FROM stdin;
    public          mom    false    200   �I       �          0    16394    bulk 
   TABLE DATA           <   COPY public.bulk (id, name, description, image) FROM stdin;
    public          mom    false    201   \K       �          0    16400 
   bulk_order 
   TABLE DATA           K   COPY public.bulk_order (id, bulk, customer, created, quantity) FROM stdin;
    public          mom    false    202   �L       �          0    16415    customer 
   TABLE DATA           T   COPY public.customer (id, name, phone, email, address, password, token) FROM stdin;
    public          mom    false    203   �M       �          0    16421    faq 
   TABLE DATA           9   COPY public.faq (id, question, answer, code) FROM stdin;
    public          mom    false    204   )P       �          0    16444 	   have_bulk 
   TABLE DATA           ;   COPY public.have_bulk (id, bulk, mom, created) FROM stdin;
    public          mom    false    205   FP       �          0    16451    helpline 
   TABLE DATA           4   COPY public.helpline (id, title, phone) FROM stdin;
    public          mom    false    206   �P       �          0    16465    mom 
   TABLE DATA           t   COPY public.mom (id, name, phone, email, address, district, password, role, token, contact_person, upi) FROM stdin;
    public          mom    false    207   ,Q       �          0    16471    news 
   TABLE DATA           G   COPY public.news (id, title, body, image, status, created) FROM stdin;
    public          mom    false    208   \       �          0    16479    notice 
   TABLE DATA           C   COPY public.notice (id, caption, description, created) FROM stdin;
    public          mom    false    209   c]       �          0    16486    product 
   TABLE DATA           l   COPY public.product (id, name, price, fssai_id, image, description, mom, status, created, code) FROM stdin;
    public          mom    false    210   P^       �          0    16494    product_order 
   TABLE DATA           Y   COPY public.product_order (id, product, customer, created, quantity, status) FROM stdin;
    public          mom    false    211   Ob       �          0    16502    query 
   TABLE DATA           i   COPY public.query (id, message, status, created, name, phone, email, address, subject, read) FROM stdin;
    public          mom    false    212   �b       �          0    16518 	   vegetable 
   TABLE DATA           R   COPY public.vegetable (id, caption, description, image, created, mom) FROM stdin;
    public          mom    false    213   d       <           2606    16542    admin admin_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            mom    false    200            B           2606    16544    bulk_order bulk_order_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bulk_order
    ADD CONSTRAINT bulk_order_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bulk_order DROP CONSTRAINT bulk_order_pkey;
       public            mom    false    202            ?           2606    16546    bulk bulk_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.bulk
    ADD CONSTRAINT bulk_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.bulk DROP CONSTRAINT bulk_pkey;
       public            mom    false    201            F           2606    16548    customer customer_phone_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_phone_key UNIQUE (phone);
 E   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_phone_key;
       public            mom    false    203            H           2606    16550    customer customer_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public            mom    false    203            J           2606    16552    faq faq_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.faq
    ADD CONSTRAINT faq_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.faq DROP CONSTRAINT faq_pkey;
       public            mom    false    204            L           2606    16564    have_bulk have_bulk_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.have_bulk
    ADD CONSTRAINT have_bulk_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.have_bulk DROP CONSTRAINT have_bulk_pkey;
       public            mom    false    205            P           2606    16566    helpline helpline_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.helpline
    ADD CONSTRAINT helpline_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.helpline DROP CONSTRAINT helpline_pkey;
       public            mom    false    206            S           2606    16570    mom mom_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.mom
    ADD CONSTRAINT mom_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.mom DROP CONSTRAINT mom_pkey;
       public            mom    false    207            U           2606    16572    news news_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.news DROP CONSTRAINT news_pkey;
       public            mom    false    208            W           2606    16574    notice notice_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.notice
    ADD CONSTRAINT notice_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.notice DROP CONSTRAINT notice_pkey;
       public            mom    false    209            ]           2606    16576     product_order product_order_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.product_order
    ADD CONSTRAINT product_order_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.product_order DROP CONSTRAINT product_order_pkey;
       public            mom    false    211            Z           2606    16578    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            mom    false    210            _           2606    16580    query query_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.query
    ADD CONSTRAINT query_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.query DROP CONSTRAINT query_pkey;
       public            mom    false    212            b           2606    16584    vegetable vegitable_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.vegetable
    ADD CONSTRAINT vegitable_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.vegetable DROP CONSTRAINT vegitable_pkey;
       public            mom    false    213            @           1259    16589    bo2bulk    INDEX     >   CREATE INDEX bo2bulk ON public.bulk_order USING btree (bulk);
    DROP INDEX public.bo2bulk;
       public            mom    false    202            D           1259    16590    customer_index    INDEX     H   CREATE UNIQUE INDEX customer_index ON public.customer USING btree (id);
 "   DROP INDEX public.customer_index;
       public            mom    false    203            M           1259    16592    hb2bulk    INDEX     =   CREATE INDEX hb2bulk ON public.have_bulk USING btree (bulk);
    DROP INDEX public.hb2bulk;
       public            mom    false    205            N           1259    16594    hb2mom    INDEX     ;   CREATE INDEX hb2mom ON public.have_bulk USING btree (mom);
    DROP INDEX public.hb2mom;
       public            mom    false    205            =           1259    16595    id_index    INDEX     ?   CREATE UNIQUE INDEX id_index ON public.admin USING btree (id);
    DROP INDEX public.id_index;
       public            mom    false    200            Q           1259    16597 	   mom_index    INDEX     >   CREATE UNIQUE INDEX mom_index ON public.mom USING btree (id);
    DROP INDEX public.mom_index;
       public            mom    false    207            C           1259    16598    po2customer    INDEX     F   CREATE INDEX po2customer ON public.bulk_order USING btree (customer);
    DROP INDEX public.po2customer;
       public            mom    false    202            [           1259    16599 
   po2product    INDEX     G   CREATE INDEX po2product ON public.product_order USING btree (product);
    DROP INDEX public.po2product;
       public            mom    false    211            X           1259    16600    product2mom    INDEX     >   CREATE INDEX product2mom ON public.product USING btree (mom);
    DROP INDEX public.product2mom;
       public            mom    false    210            `           1259    16602    vegetable2mom    INDEX     B   CREATE INDEX vegetable2mom ON public.vegetable USING btree (mom);
 !   DROP INDEX public.vegetable2mom;
       public            mom    false    213            c           2606    16603    bulk_order bulk_order_bulk_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bulk_order
    ADD CONSTRAINT bulk_order_bulk_fkey FOREIGN KEY (bulk) REFERENCES public.bulk(id) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.bulk_order DROP CONSTRAINT bulk_order_bulk_fkey;
       public          mom    false    202    201    2879            d           2606    16608 #   bulk_order bulk_order_customer_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bulk_order
    ADD CONSTRAINT bulk_order_customer_fkey FOREIGN KEY (customer) REFERENCES public.customer(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.bulk_order DROP CONSTRAINT bulk_order_customer_fkey;
       public          mom    false    2888    203    202            e           2606    16618    have_bulk have_bulk_bulk_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.have_bulk
    ADD CONSTRAINT have_bulk_bulk_fkey FOREIGN KEY (bulk) REFERENCES public.bulk(id) ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.have_bulk DROP CONSTRAINT have_bulk_bulk_fkey;
       public          mom    false    201    2879    205            f           2606    16623    have_bulk have_bulk_mom_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.have_bulk
    ADD CONSTRAINT have_bulk_mom_fkey FOREIGN KEY (mom) REFERENCES public.mom(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.have_bulk DROP CONSTRAINT have_bulk_mom_fkey;
       public          mom    false    205    2899    207            g           2606    16633    product product_mom_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_mom_fkey FOREIGN KEY (mom) REFERENCES public.mom(id) ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.product DROP CONSTRAINT product_mom_fkey;
       public          mom    false    2899    210    207            h           2606    16638 )   product_order product_order_customer_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_order
    ADD CONSTRAINT product_order_customer_fkey FOREIGN KEY (customer) REFERENCES public.customer(id) ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.product_order DROP CONSTRAINT product_order_customer_fkey;
       public          mom    false    203    211    2888            i           2606    16643 (   product_order product_order_product_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_order
    ADD CONSTRAINT product_order_product_fkey FOREIGN KEY (product) REFERENCES public.product(id) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.product_order DROP CONSTRAINT product_order_product_fkey;
       public          mom    false    2906    210    211            j           2606    16653    vegetable vegetable_mom_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vegetable
    ADD CONSTRAINT vegetable_mom_fkey FOREIGN KEY (mom) REFERENCES public.mom(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.vegetable DROP CONSTRAINT vegetable_mom_fkey;
       public          mom    false    207    213    2899            �   �  x�}��r�@��u�.����V�qPфh�妅V�thP��G��&3�9u��|��X1��*#��>��BA�l;u��1�V�r6XG?���7>_����"�i��L�[���_^! DPY]B��pL�)70�P�U^ˇ�I�B��%�%�M�W�QP���h1x�<2'����N�Ř����]y��bTR�]�_���ˀ��c2DB!6-��A�����{ĈU���%��������n�u�8�u)<s�>�c�	�M��� Rn=d�b�͓��}r櫳�'��M ��.�md9�\��ئ�)P�Rɥ�������E��I�7i��PV����5�&N��.�����C������d���ґ�N�߬Η�J��x��e��/׆ �;�}��2 E��8|����J���V�di��      �   �  x�}����0E��W�Y`0�E�ҧX�X��*��#�ǲhP�8��G�<�� �D=���'�|X��y�|��W�e���e�C�I߳သ��# �^�r�ǐ`q	��O����P�����_��Wȑ,`%ř[��G��V-��a.������Lx,P�2x+��S!'W�t��O��>���N�D��J�|M�@{1�����7��%�70����V9����~rJi�)V�	�)�0YB����l��^���|8g�h[���<{A?ؿb96��l�~޽g����ms7��d5yB���d���~m�1\}Qcۼ,��T:�U���|蠆���x�;��6�t)Q[�$'�� I�{y �9��B���*���f�5M��*      �   �   x����n�0�s�}"�q�$ϲK)�ni�kY��˦
�&M ��?��wK�<�qZ���jw��>&�����)���" � n�m�bQ�u8�����?��H�0�i�W,?F>��������ȳ��#�f0�SVHbժ
o��0?��uLA��+^�����Hz�LRMY������X���$&��P(��;�8��\1,U�Zۂ����� ����      �   3  x�u�ɒ�@E�����v�2��q��Q&���HH&�����Zu��ݻ�'�k��e�B�
�������a��K�DI��ո�1��/�W�+�^Y�:��@։W����NS6��2.�ͫ�j��,�y��؈�0�Ƭ��--�e���'�p�9�\cFX( (B�y�.���_��#�������c�I�GQ�I`5Z	6� 7�#�=�L��[.���=G���.�4�(�d'�1�O^Wi��b)2�I�|'N��5��7��Qw���͸V�T�X8D�!�jC[�~��u*$6&�tI�
I֥ T��G*�*E�2�q��c�:�.���i\O�r	��V4g��	�DyF��8*�����-�y�(@�����#}~�%����oQ���r�k`�m�O�[��է�iG����d�DL6�O�85�HƏƦ�σ�HR�x��ڮ�|UZ[a?(z���;����]���$>;s��4�����&�̎{��X�ܥ�l��T�&n�����m��۽�*MF7�Dt��{,AWK���+z���/f������      �      x������ � �      �   �   x�}�K�0��1]����ݵ8D��IC���}$�8<����s�~	�
�M���^bL�R�sҥ���lT4����IqPB�`��u�0���o�AJ��AZ�,�����+��Yg�[ �	�ms���+=�ȣ�h�sR
�N�1� .B.      �   2   x���1K-M+2�N5MM+�+�J-�/-JN崴07351624������ 3$*      �   �
  x��Xے�H}����~�8*��<�������舊R@�_��������I,������OTAf�k��k/�`���գ���1)�+��Z�ȷ�uU����D��x�di��#������pC�};1|ң�o��(���A�e��1p���z>�[P�����+e�J��O�kKs�"C���$P�[�l� d�c	��0$8�׉G���a�*߆�:�+߁��
�;�p��������y-�F.�Q����nb0�q���'�$E���@7�B��,~;���_� )�+�#�&� �:�����������qm�-�;m@���/w�&��l5��M���h1�e�/qI��R�]�>�
�p�S|���A����������Zo����vҸ���c��3M򄀝�ؽ�a{ L<�?!�K��?���VH��O�0(b{c���x���:�{&�J�5��t~�UY��F�Zz [������ +C��F~���"u�A��=���ҿ��D�IQ<I�4f��r�@���G��`� �օ�� U� �'����/��!n�^#��9�ʦ)�ZBY9�ξ/�	:�aƥe������c;��`��QT�����xڔ���N��vW/��)��#Rf��' x�y��B��|L��*�ᤀ&²��n���=?�=i��wH�K��p�,(�@�E%�7�2���m�r�e�U6$s&�R;V�]?��D ��-�����+���~�}#�}X4w�������i��U-&0$M UL�|�q�	|�
�y��M2Ÿ��Z�k��P��4�h�5��=s�Ooco��"����j�zƆ�5�����ݗSn�:�t����3`��0Q�i��_E��	���8A�o)�_��sf��+��_| ����$`~H���9��ޚkT�P[���5n�Q��?36T������%��b{��Qם%>
b���(渒���c������Ee,�,�X�<�[�bO8Gy	�`���E:����������Wb��O��)�Tn��9������FZ˕l�]y'l�lPS"K����ۣ���. �8Y��ċ���J~�Y���9��H���;%�Q���K��>�r/S����|k��t���C(WM߃�r�B}�OnuE�}:��#����!�d�,��a�}T����|�H�U�=<�;_T�?A�>]���ޛD�A��C�?n?A�Lx�}�s�R=RzA���Ё�Gsм� ��`t=�cC�R�/Ws�TV�0���)�; �JP��bR6�����=���>4�.e�W�r�zZA2wm�qe;��G�<��@���E�2(���r��¨���$�L:�\�8�>���l���a�ުs>�OW&�ԲhY-��XXM��nҪ<kWf>㕿�K~�_۵��Y��g<�s�F����L��2��G6�7k�c�� ���L�cjMY��v&����W��{��g�v����{d�e�Rn�*M�Pzٶ�&��2�7���x�HꁔO���L�n�O�$|�
;x	�.��|T�����!�G$�ep�b�B���������'��c�{�膽�s��g�*7�g������ƨ�չ����a�`dhFt�g�٢N�fw?ٌK��4 ʐ�)�`��a"'y7�A)s@X _Et<�E�oYx/��gx��X6S��> 9��xv������j!L6�)uw�e��1H��k�N�����bY=�ᶹ���C��&���6%0��۩8|��۾whăg�(p=ч�����s[�\VOөqP��q��9�:&�}�pF*�ݶ��n�
4]ߟ��[���A,�\�cg���Ě��v�\o��Ά�IU6���LK|�-���'i!�h� �m���^��=xZ����H����!��H�m��P�t� ��:Ũv���x�i�O�F��
�����jMٟ��F2�C��O��!���l�*M�	?�����.�z�1s̸<����hD_`�M�O�Ĉ�bvܖ�m/s�PX��f�z�;�5V�Y��9�E�;��/NHo{���4��Pja*Wez�Vl[�Aou��"��-��\LsnW9��J_j1�FF�s�Nṏ���1q�v`a/���z��Y�($F�!Ԩ�i�PL!�M����ܒ?Ǿ�O!�no&�	���}���n��V푹��ƞ�����f��v���P�]�T�=�o��VO�+�%R����x�b�[s��:���ASf¶�&~�6�e1��GU�3H����~ٺ�tG	r-�ˑ#�g�6��x5kZ��7u}�dfUL�5V�y;~󊈚�E>[:JR����#(v_�?��sL�%��������}*Gl���_/]���_2��I�4��_-d�W҂D��P����b],V� B���F��<L����>��(15!써񕞺�se�������M�V��n_�[`�\���A0f�QL�~R�Yf��bR��̏ʋ���1/�!;� �fy"��k�[��ވGnwY��p�q�4������E5QR'Q�S�eg���RğǴsp�L������{C��ax���8��I��G?�8(o/���Ű�gol�r*��Y6�#Bgɋ<I�9��@��O#�e�mo��4c��BW���A��*�9+�G��7�r.hW���k���^W������J��Q�G\�}��ZjI�7��������40[#��w[��K=kV��B��mxjs���c�ӆO���"{�.�֟�{�{����F�!!��������r
      �   B  x�e�OO�0�����q�X�
l��2.\L�֚�8����$c��'�y��g��F��n뚳�lв�I`�
�vKxxZ��#`3�d��,8��mu7{�����������4��*���/ }�z��O��֤Y7���:�D�a�-�$�%�mu ��	�	�'+���vt��,'��(}q�&��:���'���f�}�!E����i$�魪���)7�a�SR!�ӡ���d���(�QLD�9��â'�q�d��6M��ۘp�*�@��lz���lw����m��e�m6ϒ�YYϪ
�W�e�����u�y��t)��      �   �   x�U�;o�0Eg����<�6J��TJ�.ƾ7~ 0$���v�|�9G΂5K{�����ӑj�+�F�����%���b����)��Cx�:>��B�F�?uzBL^�����(Y3)5��+W���0�����>.#���^#�EBse��85��MVb��L8�;�)i�݃ʊ4�wc�PZ�F�`;䯈�A;s��dYQdŖJv`���E���w�W����\�      �   �  x��UK��6>knMf��-���ʹ�C�=lo{�)zŘ���z}�v�t6'[" ���-�����a�좸�"�^@R1���W�eݴ�5+��x��_��^<b�v����E��X�f��B��n�TT�b9�X���M�nꦬ���u���������.º*�`U��(x�-p��-��8ko��$��D��N�3*J�A�J$���_����Y8�~!9b�H�
ƈQ�
�J������I{W��D��삷'��j'����t:w4��S���@j���� ��.g[#�5x0ߍR�v�E�� l	�9)��h�z�0:�
�n�d�Ԏ�-�x7�KT������	[�K(56�W�̷��=�_m��f�*�f�T��=1�n,>����6�HsHa/h�1�Y�|b�̴a��N�����'6�h��� �r4If&�`$$bB��L���+�K� �=r�U*�xg���u ?9���ў�wP1���?*�U�q�As�VD�T1�KP�)_���"�.wI��{T�#qV�Biy����b���b��7����Xռb�և���=���Ln[��G4a��u8��.�����7�5�u��HWğ��0&�??!Rh˨;�M��jd��LAt��@����Ĳ{��4�f�AȤ���v�t�5���s�&T|����XV��ꧺ)f�=d���A�e]\+��ǹ���'��N8��es�&9�!n׬`BG]��o�#��Q��d��pT"�'\�	�����0}J>7.UHz���D���+HcBs�ik�+Hd6�[���Ʋm���bs���\><����Ai����E��ƵJ���P�G���c��$��U���S<h�7�j��E�e$C���\g��������d�yQ����I��L�"�k:��������������A�n"b�_��ό��I�]@����������FE��%�Q'���U�~$�ఝ��[�_lxU6U�ْ|*�������U      �   �   x���K�0E��*� ��ʧkq"T
ԊA���Ec����InN�[�=�n�.�ߔ۹~��Ś���ܞ���k��U��)���RfH��}�s�!�n[qh�:xY]d5��L%?��JF��H ����`e�|�7��/�gA2.EL�P�>eZ�7��C`      �     x����N�@���)؛��XubI��e7W;#Ck`P��;�l�hL�g��~6��w�!��5��FYP�`"��HD�y��0��n�R�W�A�MN��,�{�p�N-�=5��ь8`��(W�Y�ZO��Ó�֐j5��iR�p8��҂��	�*��ָ��%��L7�_�������o*�r O���,��DJ3�B�5�˹�?5y��~�pw��Q��iƮ�V�cnG�o���&l��37&�1���׸��hf��(�_��8      �   �   x�U�9�0 ��+���� �)SD)i�#� �����v4�����6ti�(�� �(�p��t��]�v�WTTLP܀�)�2�g$����9�����h�=t�̴����z��S�'����צi �������Pۯ�J�+�K�*�l,���Gݹ8�L���8c     