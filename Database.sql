PGDMP         ,                y            TestEmp    11.11    13.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17554    TestEmp    DATABASE     e   CREATE DATABASE "TestEmp" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_India.1252';
    DROP DATABASE "TestEmp";
                postgres    false            P           1247    17611    enum_Departments_isActive    TYPE     M   CREATE TYPE public."enum_Departments_isActive" AS ENUM (
    '0',
    '1'
);
 .   DROP TYPE public."enum_Departments_isActive";
       public          postgres    false            X           1247    17627    enum_Emps_isActive    TYPE     F   CREATE TYPE public."enum_Emps_isActive" AS ENUM (
    '0',
    '1'
);
 '   DROP TYPE public."enum_Emps_isActive";
       public          postgres    false            [           1247    17632    enum_Emps_isdeleted    TYPE     G   CREATE TYPE public."enum_Emps_isdeleted" AS ENUM (
    '0',
    '1'
);
 (   DROP TYPE public."enum_Emps_isdeleted";
       public          postgres    false            ?            1259    17617    Departments    TABLE       CREATE TABLE public."Departments" (
    id integer NOT NULL,
    "departmentName" text NOT NULL,
    "isActive" public."enum_Departments_isActive" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public."Departments";
       public            postgres    false    592                       0    0    COLUMN "Departments"."isActive"    COMMENT     T   COMMENT ON COLUMN public."Departments"."isActive" IS '0 for inactive 1 for active';
          public          postgres    false    197            ?            1259    17615    Departments_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Departments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Departments_id_seq";
       public          postgres    false    197                       0    0    Departments_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Departments_id_seq" OWNED BY public."Departments".id;
          public          postgres    false    196            ?            1259    17639    Emps    TABLE     ?  CREATE TABLE public."Emps" (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    designation text NOT NULL,
    email text NOT NULL,
    "DOB" date NOT NULL,
    address text NOT NULL,
    "departmentId" integer NOT NULL,
    "isActive" public."enum_Emps_isActive" NOT NULL,
    isdeleted public."enum_Emps_isdeleted" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Emps";
       public            postgres    false    603    600                       0    0    COLUMN "Emps"."isActive"    COMMENT     M   COMMENT ON COLUMN public."Emps"."isActive" IS '0 for inactive 1 for active';
          public          postgres    false    199                       0    0    COLUMN "Emps".isdeleted    COMMENT     K   COMMENT ON COLUMN public."Emps".isdeleted IS '0 for active 1 for deleted';
          public          postgres    false    199            ?            1259    17637    Emps_id_seq    SEQUENCE     ?   CREATE SEQUENCE public."Emps_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Emps_id_seq";
       public          postgres    false    199                       0    0    Emps_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Emps_id_seq" OWNED BY public."Emps".id;
          public          postgres    false    198            ?
           2604    17620    Departments id    DEFAULT     t   ALTER TABLE ONLY public."Departments" ALTER COLUMN id SET DEFAULT nextval('public."Departments_id_seq"'::regclass);
 ?   ALTER TABLE public."Departments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    197    196    197            ?
           2604    17642    Emps id    DEFAULT     f   ALTER TABLE ONLY public."Emps" ALTER COLUMN id SET DEFAULT nextval('public."Emps_id_seq"'::regclass);
 8   ALTER TABLE public."Emps" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    198    199    199                      0    17617    Departments 
   TABLE DATA           c   COPY public."Departments" (id, "departmentName", "isActive", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    197   ?                 0    17639    Emps 
   TABLE DATA           ?   COPY public."Emps" (id, "firstName", "lastName", designation, email, "DOB", address, "departmentId", "isActive", isdeleted, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    199   \                  0    0    Departments_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Departments_id_seq"', 2, true);
          public          postgres    false    196                       0    0    Emps_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public."Emps_id_seq"', 3, true);
          public          postgres    false    198            ?
           2606    17625    Departments Departments_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT "Departments_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."Departments" DROP CONSTRAINT "Departments_pkey";
       public            postgres    false    197            ?
           2606    17647    Emps Emps_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Emps"
    ADD CONSTRAINT "Emps_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Emps" DROP CONSTRAINT "Emps_pkey";
       public            postgres    false    199               O   x?3?tLN?/?+?4?4202?50"C+C+Ss=SSmS+c??\F?A?FY[?虛Zb?)????? ?D?         ?   x?u????@Dk?+?OY?????? ??@K?BɝD?Ϣ AdW3????vw?UJZ???ߝh?Kulc???	Um6???6?j??(ZBsFj??fu???a??֩?????aF??6-Cy????7?)X???{????t6??#S????+?Yͬ??7xU??S????<?
1?6#3|??M?$W?IZ?     