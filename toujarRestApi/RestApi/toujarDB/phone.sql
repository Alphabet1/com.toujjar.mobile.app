CREATE TABLE [dbo].[phone]
(
	[idPhone] BIGINT NOT NULL PRIMARY KEY IDENTITY, 
    [marque] NVARCHAR(50) NULL, 
    [memoire] INT NULL, 
    [camera] INT NULL, 
    [coulleur] NVARCHAR(50) NULL, 
    [isDuos] NVARCHAR(50) NULL, 
    [isNeuf] NVARCHAR(50) NULL, 
    [prix] BIGINT NULL, 
    [ville] NVARCHAR(50) NULL, 
    [email] NVARCHAR(50) NULL, 
    [phone] NVARCHAR(50) NULL, 
    [image1] TEXT NULL, 
    [model] NVARCHAR(50) NULL, 
    [trader_name] NVARCHAR(50) NULL, 
    [trader_facebook] NVARCHAR(MAX) NULL, 
    [trader_insta] NVARCHAR(MAX) NULL, 
    [temps] DATETIME NULL, 
    [img_count] INT NULL, 
    [password] NVARCHAR(50) NULL
)
