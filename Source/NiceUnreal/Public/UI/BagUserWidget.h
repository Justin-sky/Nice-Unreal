// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Blueprint/UserWidget.h"
#include "Components/Button.h"

#include "BagUserWidget.generated.h"

/**
 * 
 */
UCLASS()
class NICEUNREAL_API UBagUserWidget : public UUserWidget
{
	GENERATED_BODY()

	public:
		UBagUserWidget(const FObjectInitializer& ObjectInitializer);

		virtual bool Initialize() override;

	private:
		UPROPERTY(meta=(BindWidget))
		UButton* WeaponBtn;
		UPROPERTY(meta=(BindWidget))
		UButton* ConsumBtn;
};
