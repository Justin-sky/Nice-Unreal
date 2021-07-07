// Fill out your copyright notice in the Description page of Project Settings.


#include "UI/BagUserWidget.h"

UBagUserWidget::UBagUserWidget(const FObjectInitializer& ObjectInitializer):Super(ObjectInitializer)
{
}

bool UBagUserWidget::Initialize()
{
	if (!Super::Initialize())
	{
		return  false;
	}

   // WeaponBtn = Cast<UButton>(GetWidgetFromName("WeaponBtn")); 通过代码获取button

	UTexture2D* ButtonNormal = LoadObject<UTexture2D>(NULL,TEXT("Texture2D'/Game/Asset/UIAsset/Bag/ui_bag_tipbtn_1.ui_bag_tipbtn_1'"));
	UTexture2D* ButtonClick = LoadObject<UTexture2D>(NULL,TEXT("Texture2D'/Game/Asset/UIAsset/Bag/ui_bag_tipbtn_2.ui_bag_tipbtn_2'"));

	WeaponBtn->WidgetStyle.Normal.SetResourceObject(ButtonNormal);
	WeaponBtn->WidgetStyle.Normal.DrawAs = ESlateBrushDrawType::Image;
	
	return  true;
}
