// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"

#include "JsEnv.h"
#include "Engine/GameInstance.h"
#include "JsEnv/Private/ContainerWrapper.h"

#include "TsGameInstance.generated.h"

/**
 * 
 */
UCLASS()
class NICEUNREAL_API UTsGameInstance : public UGameInstance
{
	GENERATED_BODY()

	public:
		virtual void Init() override;
		virtual void OnStart() override;
		virtual  void Shutdown() override;

	private:
		TSharedPtr<puerts::FJsEnv> GameScript;
};
