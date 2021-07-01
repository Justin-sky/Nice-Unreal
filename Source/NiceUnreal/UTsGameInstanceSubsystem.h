// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"

#include "JsEnv.h"
#include "Subsystems/GameInstanceSubsystem.h"
#include "UTsGameInstanceSubsystem.generated.h"

/**
 * 
 */
UCLASS()
class NICEUNREAL_API UUTsGameInstanceSubsystem : public UGameInstanceSubsystem
{
	GENERATED_BODY()
	
	public:
		virtual  bool ShouldCreateSubsystem(UObject* Outer) const override { return  true; }
		virtual  void Initialize(FSubsystemCollectionBase& Collection) override;
		virtual  void Deinitialize() override;

	private:
		TSharedPtr<puerts::FJsEnv> GameScript;
};
